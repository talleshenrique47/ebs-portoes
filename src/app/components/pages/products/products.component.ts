import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageModalComponent } from '../../image-modal/image-modal.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  models = [
    { name: 'EBS 01', imageUrl: 'assets/images/jpg/EBS01.jpg' },
    { name: 'EBS 02', imageUrl: 'assets/images/jpg/EBS02.jpg' },
    { name: 'EBS 03', imageUrl: 'assets/images/jpg/EBS03.jpg' },
    { name: 'EBS 04', imageUrl: 'assets/images/jpg/EBS04.jpg' },
    { name: 'EBS 05', imageUrl: 'assets/images/jpg/EBS05.jpg' },
    { name: 'EBS 06', imageUrl: 'assets/images/jpg/EBS06.jpg' },
    { name: 'EBS 07', imageUrl: 'assets/images/jpg/EBS07.jpg' },
    { name: 'EBS 08', imageUrl: 'assets/images/jpg/EBS08.jpg' },
    { name: 'EBS 09', imageUrl: 'assets/images/jpg/EBS09.jpg' },
    { name: 'EBS 10', imageUrl: 'assets/images/jpg/EBS10.jpg' },
    { name: 'EBS 11', imageUrl: 'assets/images/jpg/EBS11.jpg' },
    { name: 'EBS 12', imageUrl: 'assets/images/jpg/EBS12.jpg' },
    { name: 'EBS 13', imageUrl: 'assets/images/jpg/EBS13.jpg' },
    { name: 'EBS 14', imageUrl: 'assets/images/jpg/EBS14.jpg' },
    { name: 'EBS 15', imageUrl: 'assets/images/jpg/EBS15.jpg' },
    { name: 'EBS 16', imageUrl: 'assets/images/jpg/EBS16.jpg' },
    { name: 'EBS 17', imageUrl: 'assets/images/jpg/EBS17.jpg' },
    { name: 'EBS 18', imageUrl: 'assets/images/jpg/EBS18.jpg' },
  ];  
  
  constructor(public dialog: MatDialog) {}

  openImageModal(imageUrl: string): void {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      data: { imageUrl },
      width: '80%',
      height: 'auto', // ou uma altura fixa, como '500px'
      panelClass: 'custom-modalbox', // Certifique-se de que a classe está corretamente implementada
      disableClose: false,
      hasBackdrop: true,
    });    
  }
}
