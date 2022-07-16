import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { AuditService } from 'src/app/apis/audit.service';
import { AuditEntry } from 'src/app/models/audit.model';

@Component({
  selector: 'app-audits',
  templateUrl: './audits.component.html',
  styleUrls: ['./audits.component.scss']
})
export class AuditsComponent implements OnInit {

  constructor(private audit:AuditService,private fb: FormBuilder) {
    this.formInit();
  }
  
  public dataSource: AuditEntry[];
  public filterValues:any;
  public fields = [
    "clientIp",
    "clientIpDetails",
    "createdAt",
    "email",
    "hostname",
    "serverIp",
    "serverIpDetails",
    "statusCode",
    "statusMessage",
    "updatedAt",
    "uri"
  ]
  public displayedColumns: any = ["uri",'email',"clientIp",'client_org',"serverIp",'server_org',"statusMessage","createdAt","updatedAt"]
  public totalCount=0;
  public form:FormGroup;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit():void{
    this.getFilterValues();
    this.getUsers(0,10)
  }

  public getUsers(pageIndex,pageSize){
    const formValues = this.form.getRawValue();
    this.audit.getAudits(pageIndex,pageSize,formValues).subscribe((res:any)=>{
      this.dataSource = res.audits;
      this.totalCount = res.totalCount;
    },
    error=>{
      console.error(error.message);  
    })
  }

  public getFilterValues(){
    this.audit.getAuditFilterValues().subscribe((res:any)=>{
      this.filterValues = res
    },
    error=>{
      console.error(error.message);  
    })
  }

  public pageNavigate(event:PageEvent){
    this.getUsers(event.pageIndex,event.pageSize);
  }

  private formInit(){
    this.form = this.fb.group({
      statusCode:[''],
      statusMessage:[''],
      email:[''],
    })
  }

  public applyFilter(){
    this.paginator.firstPage();
    this.getUsers(0,10);
  }

  public clearFilter(){
    this.form.reset();
    this.paginator.firstPage();
    this.getUsers(0,10);
  }
}
