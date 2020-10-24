const role_change =require('./functions/role_change') 
module.exports = {
    name: "eject",
    description: "command give someone ejected role without a vote",
    usage:'!eject @mention',
    execute(message) {
        role_change.execute(message)
    }
}