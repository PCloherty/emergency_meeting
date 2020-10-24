module.exports = () =>{
    const activities = ['Vitals', 'Cams', 'Door Logs', 'From Vents', 'Admin']
    const activityInt = Math.round(Math.random() * activities.length)
    const status = activities[activityInt].toString('')
    return status
}