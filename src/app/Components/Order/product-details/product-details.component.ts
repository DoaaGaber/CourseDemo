import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from 'src/app/Models/iproduct';
import { StaticProductService } from 'src/app/services/static-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  currentID:number=0;
  currentPrd:IProduct|null=null;
  allPrdIdArr:number[]=[];
  constructor(private activateroute :ActivatedRoute , 
    private prdservice:StaticProductService,
    private location:Location,
    private router:Router) { 

   this.allPrdIdArr=this.prdservice.getALLPrdID();
  }

  ngOnInit(): void {
    //this.currentID=Number(this.activateroute.snapshot.paramMap.get('pid'));
    

    this.activateroute.paramMap.subscribe((pid)=>
    {
      this.currentID=Number(pid.get('pid'));
      this.currentPrd=this.prdservice.getProductByID(this.currentID);
    })
  }
  goBack()
  {
     this.location.back();
  }
  goPrevious()
  {
    let currindex=this.allPrdIdArr.findIndex((pid)=>pid==this.currentID);
    let previousID;
    if(currindex>1)
    
    {
       previousID=this.allPrdIdArr[currindex-1];
      this.router.navigate(['/details',previousID]);
    }
  }
  goNext()
  {
    let currindex=this.allPrdIdArr.findIndex((pid)=>pid==this.currentID);
    let nextID
    if(currindex>0)
    {
     nextID=this.allPrdIdArr[currindex+1];
      this.router.navigate(['/details',nextID]);
    }
  }
  


}
