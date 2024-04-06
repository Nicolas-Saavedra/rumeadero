package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `[
			{
				"id": "_pb_users_auth_",
				"created": "2024-04-06 06:27:18.558Z",
				"updated": "2024-04-06 20:56:55.777Z",
				"name": "users",
				"type": "auth",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "users_avatar",
						"name": "avatar",
						"type": "file",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"mimeTypes": [
								"image/jpeg",
								"image/png",
								"image/svg+xml",
								"image/gif",
								"image/webp"
							],
							"thumbs": null,
							"maxSelect": 1,
							"maxSize": 5242880,
							"protected": false
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {
					"allowEmailAuth": true,
					"allowOAuth2Auth": true,
					"allowUsernameAuth": true,
					"exceptEmailDomains": null,
					"manageRule": null,
					"minPasswordLength": 8,
					"onlyEmailDomains": null,
					"onlyVerified": false,
					"requireEmail": false
				}
			},
			{
				"id": "9i8med79fuppguf",
				"created": "2024-04-06 07:30:24.101Z",
				"updated": "2024-04-06 20:47:27.274Z",
				"name": "groups",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "lcm9pk0b",
						"name": "name",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 20,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "81bidssu",
						"name": "owner",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "xowzgovh",
						"name": "shortDescription",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 200,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "z7npojet",
						"name": "smallImage",
						"type": "file",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"mimeTypes": [
								"image/jpeg",
								"image/png",
								"image/svg+xml",
								"image/webp",
								"image/avif"
							],
							"thumbs": [
								"200x200"
							],
							"maxSelect": 1,
							"maxSize": 5242880,
							"protected": false
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "tgq8m7qd79byz4w",
				"created": "2024-04-06 07:33:04.927Z",
				"updated": "2024-04-06 20:49:45.922Z",
				"name": "groups_social_media",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "6rxgg16s",
						"name": "socialMediaName",
						"type": "select",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"maxSelect": 1,
							"values": [
								"discord",
								"whatsapp",
								"telegram",
								"facebook",
								"private"
							]
						}
					},
					{
						"system": false,
						"id": "dywfo1vg",
						"name": "link",
						"type": "url",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"exceptDomains": null,
							"onlyDomains": null
						}
					},
					{
						"system": false,
						"id": "zp2cvnkw",
						"name": "group",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "9i8med79fuppguf",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "wua2xo88blrdro6",
				"created": "2024-04-06 07:49:36.794Z",
				"updated": "2024-04-06 20:48:09.224Z",
				"name": "groups_detail",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "mqi6jact",
						"name": "fullDescription",
						"type": "editor",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"convertUrls": true
						}
					},
					{
						"system": false,
						"id": "qntlr2sx",
						"name": "imageBanner",
						"type": "file",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"mimeTypes": [
								"image/jpeg",
								"image/png",
								"image/svg+xml",
								"image/webp",
								"image/avif"
							],
							"thumbs": [
								"800x300"
							],
							"maxSelect": 1,
							"maxSize": 5242880,
							"protected": false
						}
					},
					{
						"system": false,
						"id": "ii2jsdr9",
						"name": "group",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "9i8med79fuppguf",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "uuebmuckkp3iazt",
				"created": "2024-04-06 07:58:22.717Z",
				"updated": "2024-04-06 21:33:45.554Z",
				"name": "groups_posts",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "kawsskf4",
						"name": "owner",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "xucg0jpg",
						"name": "title",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 25,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "kmeb1ozf",
						"name": "content",
						"type": "editor",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"convertUrls": false
						}
					},
					{
						"system": false,
						"id": "2zgtpmqm",
						"name": "image",
						"type": "file",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"mimeTypes": [
								"image/png",
								"image/jpeg",
								"image/svg+xml",
								"image/webp",
								"image/avif"
							],
							"thumbs": [
								"400x300"
							],
							"maxSelect": 1,
							"maxSize": 5242880,
							"protected": false
						}
					},
					{
						"system": false,
						"id": "jdxc0ois",
						"name": "group",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "9i8med79fuppguf",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": null,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": "@request.auth.id != \"\" &&\ngroup.groups_private_via_group.members ?= @request.auth.id",
				"viewRule": "@request.auth.id != \"\" &&\ngroup.groups_private_via_group.members ?= @request.auth.id",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "5ll7hgkmpcarqmi",
				"created": "2024-04-06 08:04:07.930Z",
				"updated": "2024-04-06 21:37:15.455Z",
				"name": "groups_private",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "mdlyfa5o",
						"name": "members",
						"type": "relation",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": null,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "dagz4jzz",
						"name": "group",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "9i8med79fuppguf",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": "@request.auth.id != \"\" &&\ngroup.owner.id = @request.auth.id ",
				"viewRule": "@request.auth.id != \"\" &&\ngroup.owner.id = @request.auth.id ",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "fmioen7wuusudml",
				"created": "2024-04-06 19:18:56.243Z",
				"updated": "2024-04-06 20:45:37.497Z",
				"name": "forum_posts",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "yeue28nl",
						"name": "author",
						"type": "relation",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "atooujeu",
						"name": "title",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 25,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "2st1i8xz",
						"name": "content",
						"type": "editor",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"convertUrls": false
						}
					},
					{
						"system": false,
						"id": "35toc1rq",
						"name": "likes",
						"type": "number",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": 0,
							"max": null,
							"noDecimal": true
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "qndnu0umtlxmfaf",
				"created": "2024-04-06 19:19:21.650Z",
				"updated": "2024-04-06 20:46:19.205Z",
				"name": "forum_posts_tags",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "n0mzt5k6",
						"name": "tag",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": 15,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "fpbcz66m",
						"name": "post",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "fmioen7wuusudml",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "ffdb03bhzs4c589",
				"created": "2024-04-06 19:23:36.232Z",
				"updated": "2024-04-06 19:40:51.679Z",
				"name": "forum_posts_comments",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "h76j49wp",
						"name": "author",
						"type": "relation",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "scqaxxfv",
						"name": "content",
						"type": "editor",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"convertUrls": false
						}
					},
					{
						"system": false,
						"id": "vwyxhbep",
						"name": "likes",
						"type": "number",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"noDecimal": false
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "cu1u5z4lqiu77sw",
				"created": "2024-04-06 20:26:15.065Z",
				"updated": "2024-04-06 20:45:12.236Z",
				"name": "forum_posts_private",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "2thlfcwr",
						"name": "privateUser",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "8rf8yack",
						"name": "forum_post",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "fmioen7wuusudml",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "v0aybsetsf8ub48",
				"created": "2024-04-06 20:26:45.183Z",
				"updated": "2024-04-06 20:45:05.128Z",
				"name": "forum_posts_comments_private",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "s52dvamk",
						"name": "privateUser",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "ivwxbsso",
						"name": "post_comment",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "ffdb03bhzs4c589",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "e34p99nj5bwr8py",
				"created": "2024-04-06 20:28:35.419Z",
				"updated": "2024-04-06 20:56:35.288Z",
				"name": "users_private",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "wmpbqn5u",
						"name": "direction",
						"type": "json",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"maxSize": 1000
						}
					},
					{
						"system": false,
						"id": "fxg6biyl",
						"name": "user",
						"type": "relation",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": false,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					}
				],
				"indexes": [],
				"listRule": "@request.auth.id != \"\" && user = @request.auth.id",
				"viewRule": "@request.auth.id != \"\" && user = @request.auth.id",
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			}
		]`

		collections := []*models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collections); err != nil {
			return err
		}

		return daos.New(db).ImportCollections(collections, true, nil)
	}, func(db dbx.Builder) error {
		return nil
	})
}
