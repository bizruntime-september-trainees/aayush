import { Subject } from 'rxjs/Subject';

var subject = new Subject();

subject.subscribe(

    data => addItem('observer 1:' + data),
    err => addItem(err),
    () => addItem('observer 1 completed')
)

subject.next('First thing is sent congrats')

function addItem(val: any) {
    var node = document.createElement('li');
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);

}
