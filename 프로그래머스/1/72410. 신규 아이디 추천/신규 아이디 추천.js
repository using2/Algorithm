function solution(new_id) {
    var answer = '';
    new_id = new_id.toLowerCase();
    new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
    new_id = new_id.replace(/\.{2,}/g, '.');
    new_id = new_id.replace(/^\.+|\.+$/g, '');
    if(new_id === "") new_id = "a";
    if (new_id.length >= 16) {
        new_id = new_id.slice(0, 15);
    }
    new_id = new_id.replace(/\.+$/, '');
    while (new_id.length < 3) {
        new_id += new_id[new_id.length - 1]; 
    }
    return new_id;
}