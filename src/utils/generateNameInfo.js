export default function generateNameInfo(str) {

    const activity = {
        activityName: '',
        activityInfo:'',
    }

    str.replace(/\b(\w.+?),{1}\s(.*)\b/, (match, p1, p2) => {
        activity['activityName'] = p1;
        activity['activityInfo'] = p2;
    });
    
    return activity;
};