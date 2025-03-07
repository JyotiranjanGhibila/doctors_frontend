import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent {
  people: any[] = [];

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.fetchPeople();
  }

  fetchPeople() {
    this.peopleService.getPeople().subscribe((data: any) => { // ✅ Add explicit type
      console.log(data, 'data');
      if (data.status === true) {
        this.people = data?.result || [];
        console.log(this.people, 'people');	
      } else {
        this.people = [];
      }
    });
  }

  deletePerson(id: string) {
    this.peopleService.deletePerson(id).subscribe(() => {
      this.fetchPeople();
    });
  }
}
