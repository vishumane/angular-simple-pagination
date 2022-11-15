import { Component } from '@angular/core';
import { FetchdataService, userService } from './fetchdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

//1.) to use simple pagination you have to just add one package which name is ngx-pagination
// URL:- https://www.npmjs.com/package/ngx-pagination

// 2.) import that package

// 3.) now just write a code with the ngfor loop with pipe like:-
//  | paginate: { itemsPerPage: 10, currentPage: p }"

// and the last after the for loop just write:-
// <pagination-controls (pageChange)="p = $event" class="float-right"></pagination-controls>
export class AppComponent {
  data: any;
  record: any;
  Response = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
    {
      userId: 1,
      id: 2,
      title: 'qui est esse',
      body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 1,
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
      body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
    },
    {
      userId: 1,
      id: 4,
      title: 'eum et est occaecati',
      body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
    },
  ];
  constructor(
    private fetchData: FetchdataService,
    private postData: userService
  ) {
    this.getData();
    this.getRecord();
    console.log('res', this.Response);
    //convert object into in arrays key and value
    var result = Object.keys(this.Response).map((key) => [
      Number(key),
      this.Response[key],
    ]);
    console.log(result, 'reeeeees');
  }
  name = 'Angular';

  getData() {
    this.fetchData.getData().subscribe((data) => {
      this.data = data;
      console.log('data', data);
    });
  }

  getRecord() {
    this.postData.getRecord().subscribe((e) => {
      this.record = e;
      console.log(e, 'fff');
    });
  }
}
