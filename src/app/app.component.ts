import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Rabobank';
  data: Array<any> = [];
  term: string = '';
  public changeListener(files: FileList){
    if(files && files.length > 0) {
      let file : File = files.item(0); 
      let reader: FileReader = new FileReader();
      reader.readAsText(file);
      reader.onload = (e) => {
        let csv: string = reader.result as string;
          this.data = this.csvJSON(csv);
          console.log(this.data);
        }
      }
  }
  public csvJSON(csv) {
    let re = /\"/gi;
    let space = /\ /gi;
    var lines = csv.replace(re,"").replace(space,"").split("\n");
    var result = [];
    var headers = lines[0].replace(re,"").replace(space,"").split(",");
    for (var i = 1; i < lines.length; i++) {
      var obj = {};
      var currentline = lines[i].split(",");
      if(typeof currentline[0] !== 'undefined' && currentline[0] !== ""){
        obj['Firstname'] = currentline[0];
        obj['Surname'] = currentline[1];
        obj['Issuecount'] = currentline[2];
        obj['Dateofbirth'] = currentline[3];
        result.push(obj);
      }
    }
    return result; //JSON
  }
}
