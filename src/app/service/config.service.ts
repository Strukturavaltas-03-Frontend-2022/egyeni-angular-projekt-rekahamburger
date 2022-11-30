import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

export interface ITableColumn {
  title: string;
  key: string;
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  artTableColumns:ITableColumn [] = [
    {title: 'ID', key: 'id'},
    {title: 'Name', key: 'name'},
    {title: 'Author', key: 'author'},
    {title: 'Price', key: 'price'},
    {title: 'Available', key: 'available'},
  ];

  constructor() { }
}
