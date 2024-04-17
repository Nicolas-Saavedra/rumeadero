package main

import (
	"log"
	"net/http"
	"os"
	"strings"

	_ "github.com/Nicolas-Saavedra/rumeadero-backend/migrations"
	"github.com/pocketbase/pocketbase"
	"github.com/pocketbase/pocketbase/core"
	"github.com/pocketbase/pocketbase/plugins/migratecmd"
)

func main() {
	app := pocketbase.New()

	// loosely check if it was executed using "go run"
	isGoRun := strings.HasPrefix(os.Args[0], os.TempDir())

	migratecmd.MustRegister(app, app.RootCmd, migratecmd.Config{
		// enable auto creation of migration files when making collection changes in the Admin UI
		// (the isGoRun check is to enable it only during development)
		Automigrate: isGoRun,
	})

	// disallow access to the app in general if no email verification has passed
	app.OnRecordAuthRequest("users").Add(func(e *core.RecordAuthEvent) error {
		if !e.Record.Verified() {
			err := e.HttpContext.JSON(http.StatusUnauthorized, map[string]string{
				"message":      "user cannot be logged in, as it has not been verified",
				"affectedUser": e.Record.Id,
			})
			return err
		}
		return nil
	})

	if err := app.Start(); err != nil {
		log.Fatal(err)
	}
}
