IAMToken="t1.9euelZqPxpeYyYmTjYyVy5uJnJCJm-3rnpWaipWXj4rIic6RnZLNjcedl5Hl9PdSQXVS-e8FekGK3fT3EnByUvnvBXpBis3n9euelZqSy5ORnp6NyI6JncyKyMyUke_8xeuelZqSy5ORnp6NyI6JncyKyMyUkQ.d81KpKqPNB94ITQ9lE_6ifQ-4TQi54F2flTD4ANHrvquvMXF72CL5l3bFGm0JAFOF9oh8aO3sihkxdLGfwpyAQ"
YCFolderID="b1g79im8d52lhp1u91lr"
ServiceAccountID="ajeb022ctef0jsdeaeo4"

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
