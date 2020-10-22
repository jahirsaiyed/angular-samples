import { Injectable } from '@angular/core';
import {Client} from 'cassandra-driver';

@Injectable({
  providedIn: 'root'
})
export class CassandraServiceService {

  client: Client;

  constructor() { 
    // this.client = new Client({
    //   contactPoints: ['127.0.0.1'],
    //   localDataCenter: 'datacenter1'
    // });
  }
}
