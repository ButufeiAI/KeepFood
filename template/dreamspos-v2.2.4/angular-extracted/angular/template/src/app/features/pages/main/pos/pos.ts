import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CommonCounter } from '../../../../shared/common-counter/common-counter';
import { MatSelectModule } from '@angular/material/select';
import { SwiperOptions } from 'swiper/types';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';
@Component({
  selector: 'app-pos',
  imports: [CommonCounter,MatSelectModule,MatSelectModule,DatePickerModule,FormsModule,SelectModule],
  templateUrl: './pos.html',
  styleUrl: './pos.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Pos {
   dates:string[]=[]
    customers: any[] | undefined;
    active: string = 'small';

setActive(value: string) {
  this.active = value;
}
    selectedCustomers: string | undefined;
    selectedCustomers2: string | undefined;
    selectedCustomers3: string | undefined;
    selectedCustomers4: string | undefined;
  @ViewChild('swiperEl', { static: false })
  swiperEl!: ElementRef<any>;
swiperConfig: SwiperOptions = {
  loop: true,
  speed: 2000,
  slidesPerView: 5,
  slidesPerGroup: 1,
  spaceBetween: 12,
  navigation: {
    nextEl: '.category-next',
    prevEl: '.category-prev'
  },
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    576: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    992: {
      slidesPerView: 3
    },
    1200: {
      slidesPerView: 3
    },
    1400: {
      slidesPerView: 4
    }
  }
};

  activeTab = 'all';
  @ViewChildren('tabSwiper')
  swipers!: QueryList<ElementRef<any>>;
  swiperConfig2 = {
    loop: false,
    speed: 2000,
    slidesPerGroup: 1,
    breakpoints: {
      567: { slidesPerView: 1 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
      1200: { slidesPerView: 3 },
      1400: { slidesPerView: 3 },
    }
  };
  slickConfig={
				dots: false,
				infinite: false,
				speed: 2000,
				slidesToShow: 2,
				slidesToScroll: 1,
				autoplay: false,
				arrows: false,
				responsive: [
					{
						breakpoint: 1400,
						settings: { slidesToShow: 2, slidesToScroll: 1 }
					},
					{
						breakpoint: 1200,
						settings: { slidesToShow: 2, slidesToScroll: 1 }
					},
					{
						breakpoint: 992,
						settings: { slidesToShow: 2, slidesToScroll: 1 }
					},
					{
						breakpoint: 768,
						settings: { slidesToShow: 2, slidesToScroll: 1 }
					},
					{
						breakpoint: 576,
						settings: { slidesToShow: 1, slidesToScroll: 1 }
					}
				]
			}
  prevSlide() {
    this.getActiveSwiper()?.slidePrev();
  }

  nextSlide() {
    this.getActiveSwiper()?.slideNext();
  }
   onTabShown(tab: string) {
    this.activeTab = tab;

    // Force Swiper to recalc width
    setTimeout(() => {
      this.getActiveSwiper()?.update();
    }, 50);
  }

  /** Get swiper of active tab */
  private getActiveSwiper() {
    const swiperEl = this.swipers.find(
      el => el.nativeElement.dataset.tab === this.activeTab
    );
    return swiperEl?.nativeElement?.swiper;
  }
 next() {
    this.swiperEl?.nativeElement?.swiper?.slideNext();
  }

  prev() {
    this.swiperEl?.nativeElement?.swiper?.slidePrev();
  }
ngOnInit():void{
  document.body.classList.add('pos-page');
   this.customers = [
            { name: 'Select Customer'},
            { name: 'Sue Allen'},
            { name: 'Frank Barrett'},
            { name: 'Jim Vickers'},
        ];
}
ngOnDestroy():void{
  document.body.classList.remove('pos-page')
}
ngAfterViewInit() {
    // force width calc after render
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 0);
  }



  onTabClick() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 50);
  }
}
