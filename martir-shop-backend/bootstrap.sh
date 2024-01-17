IAMToken=""
YCFolderID=""
ServiceAccountID=""

echo "Creating github-deploy-robot service account"
curl \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $IAMToken" \
    -d '{
        "folderId": "'$YCFolderID'",
        "name": "github-deploy-robot",
        "description": "Service account for deploying service from github to yc"
    }' \
    https://iam.api.cloud.yandex.net/iam/v1/serviceAccounts \

echo "Adding permissions to service account"
curl \
    -X POST \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $IAMToken" \
    -d '{
        "accessBindingDeltas": [
            {
                "action": "ADD",
                "accessBinding": {
                    "roleId": "serverless.containers.editor",
                    "subject": {
                        "id": "'$ServiceAccountID'",
                        "type": "serviceAccount"
                    }
                }
            },
            {
                "action": "ADD",
                "accessBinding": {
                    "roleId": "lockbox.payloadViewer",
                    "subject": {
                        "id": "'$ServiceAccountID'",
                        "type": "serviceAccount"
                    }
                }
            },
            {
                "action": "ADD",
                "accessBinding": {
                    "roleId": "container-registry.editor",
                    "subject": {
                        "id": "'$ServiceAccountID'",
                        "type": "serviceAccount"
                    }
                }
            }
        ]
    }' \
    https://resource-manager.api.cloud.yandex.net/resource-manager/v1/folders/$YCFolderID:updateAccessBindings

echo "Creating static keys for github"
curl \
    -X POST \
    -H 'Content-Type: application/json' \
    -H "Authorization: Bearer $IAMToken" \
    -d '{
        "serviceAccountId": "'$ServiceAccountID'",
        "description": "Key for github"
    }' \
    https://iam.api.cloud.yandex.net/iam/aws-compatibility/v1/accessKeys
