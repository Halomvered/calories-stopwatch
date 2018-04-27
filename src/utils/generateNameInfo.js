export default function generateNameInfo(str) {

    const activity = {
        activityName: '',
        activityInfo:'',
    }
    // eslint-disable-next-line
    str.replace(/\b(\w.+[\s\(e.g.,\s]?),{1}\s(.*)\b/, (match, p1, p2) => {
        activity['activityName'] = p1;
        activity['activityInfo'] = p2;
    });
    
    return activity;
};