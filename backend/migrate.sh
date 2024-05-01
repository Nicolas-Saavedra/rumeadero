go run main.go migrate collections
cd migrations
find . -type f ! -name '*_collections_snapshot.go' -delete
cd ..
go run main.go migrate history-sync
