import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({//decorador->extender la funcionalidad de algo
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  currentDate: Date | null = null;
  constructor() { }

resultado: number =0;

  ngOnInit(): void {
      this.currentDate =new Date();

  }
  sumar(a: number, b:number){
    this.resultado= a+b ;

  }
}
