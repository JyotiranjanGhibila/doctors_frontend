import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PeopleService } from '../../services/people.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-people-edit',
  standalone: true,
  imports: [CommonModule, FormsModule,RouterModule],
  templateUrl: './people-edit.component.html',
  styleUrl: './people-edit.component.css'
})
export class PeopleEditComponent implements OnInit {
  person: any = { name: '', age: '', gender: '', mobileNumber: '' };
  personId: string = '';

  constructor(
    private route: ActivatedRoute,
    private peopleService: PeopleService,
    private router: Router
  ) {}

  ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id') || '';
    if (this.personId) {
      this.fetchPerson();
    }
    console.log(this.person, 'person');
  }

  fetchPerson() {
    this.peopleService.getPerson(this.personId).subscribe(
      (data) => {
        if (data.status) {
          this.person = data.result[0];
        } else {
          console.error('Person not found:', data.message);
        }
      },
      (error) => {
        console.error('Error fetching person:', error);
      }
    );
  }

  updatePerson() {
    this.peopleService.updatePerson(this.personId, this.person).subscribe(
      () => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error updating person:', error);
      }
    );
  }
}
