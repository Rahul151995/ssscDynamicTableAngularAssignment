import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tableOption: any[] = [
    {
      visible: true,
      key: 'name',
      colHeading: 'Name',
    },
    {
      visible: true,
      key: 'designation',
      colHeading: 'Designation',
    },
    {
      visible: false,
      key: 'action',
      colHeading: 'Action',
      config: [{
        type: 'view',
        input: 'button',
        icon: 'fa fa-eye',
      }, {
        type: 'delete',
        input: 'button',
        icon: 'fa fa-trash',
      }]
    }
  ];

  tableData: any[] = [
    {
      name: "Rahul Kumar",
      designation: "Software Developer"
    },
    {
      name: "Rohan",
      designation: "Software Developer"
    },
    {
      name: "Sid",
      designation: "Software Developer"
    }
  ]
  ngOnInit(): void {

  }
  title = 'ssscDynamicTableAngularAssignment';
  tableActionTriggered(e: any) {

  }
}
