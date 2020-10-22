import { Component, OnInit } from '@angular/core';
import { CassandraServiceService } from 'src/app/services/cassandra-service.service';

@Component({
  selector: 'app-cassandra-client',
  templateUrl: './cassandra-client.component.html',
  styleUrls: ['./cassandra-client.component.css']
})
export class CassandraClientComponent implements OnInit {

  
  constructor(private cassandra: CassandraServiceService) { }

  ngOnInit(): void {

  }

}
