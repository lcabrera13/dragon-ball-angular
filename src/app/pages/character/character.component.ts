import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, type OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [
    NgIf,
    NgFor
  ],
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  character: any | null = null

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.http
      .get(`https://dragonball-api.com/api/characters/${id}`)
      .subscribe((data: any) => {
        this.character = data
      })
  }

}
