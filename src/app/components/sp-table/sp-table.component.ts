import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';


interface TableConfig {
  "page_id": any;
  "ps"?: number;
  "pn"?: number;
}
@Component({
  selector: 'sp-table',
  templateUrl: './sp-table.component.html',
  styleUrls: ['./sp-table.component.css']
})
export class SpTableComponent implements OnInit {
  public components;  
  @Input() config: TableConfig;
  @Output() onCheck: EventEmitter<any> = new EventEmitter<any>();
  public columns: Array<any> = [];
  public tableData: Array<any> = [];

  constructor(private http: HttpClient) {}
  ngOnInit(): void {    
    this.get();
  }
  get() {
    this.http.get('http://localhost:8081/table/1').subscribe(resp => {
      this.columns = resp['data'].columns;
      this.loadTableData();
    })
  }
  loadTableData() {
    const postData = {
      "ps": this.config.ps ? this.config.ps : 10,
      "pn": this.config.pn ? this.config.pn : 1
    }

    this.http.post('http://localhost:8081/table/1', postData).subscribe(resp => {
      const rows = resp['data']['rows'];
      this.tableData = rows;
    })
  }
  checkSingle(row) {
    row.selected = !row.selected;
    this.onCheck.emit({ type: 'single', selected: row, all: this.tableData })
  }
  checkAll(e: any) {
    const checked = e.currentTarget.checked ? true : false;
    for (let row of this.tableData) {
      row.selected = checked;
    }
    this.onCheck.emit({ type: 'all', selected: {}, all: this.tableData })
  }

}
