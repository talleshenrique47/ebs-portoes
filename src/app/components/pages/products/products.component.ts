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
    { name: 'EBS 01', imageUrl: 'assets/images/svg/portao-image.svg' },
    { name: 'EBS 02', imageUrl: 'assets/images/svg/portao-image.svg' },
    { name: 'EBS 03', imageUrl: 'assets/images/svg/portao-image.svg' },
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
