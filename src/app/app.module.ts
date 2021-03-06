import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyProfilePage } from '../pages/my-profile/my-profile';
import { MyPaymentsPage } from '../pages/my-payments/my-payments';
import { MyDeliveriesPage } from '../pages/my-deliveries/my-deliveries';
import { LoginPage } from '../pages/login/login';
import { MyOrdersPage } from '../pages/my-orders/my-orders';
import { HomePagePage } from '../pages/home-page/home-page';
import { PreviousPurchasesPage } from '../pages/previous-purchases/previous-purchases';
import { PendingOrdersPage } from '../pages/pending-orders/pending-orders';
import { RecordDepositPage } from '../pages/record-deposit/record-deposit';
import { OrderPage } from '../pages/order/order';
import { DeliveryPage } from '../pages/delivery/delivery';
import { CalculatePaymentPage } from '../pages/calculate-payment/calculate-payment';
import { UploadDepositSlipPage } from '../pages/upload-deposit-slip/upload-deposit-slip';
import { EditProfile } from '../pages/Edit-profile/Edit-profile';

import { WarrantyHomePage } from '../pages/warranty-home/warranty-home';
import { SubmitClaimNamePage } from '../pages/submit-claim-name/submit-claim-name';
import { TrackClaimPage } from '../pages/track-claim/track-claim';
import { PreviousClaimsPage } from '../pages/previous-claims/previous-claims';
import { WarrantyOrderListPage } from '../pages/warranty-order-list/warranty-order-list';
import { ClaimOrderPage } from '../pages/claim-order/claim-order';
import { WarrantyDetailsPage } from '../pages/warranty-details/warranty-details';
import { SubmitRequestPage } from '../pages/submit-request/submit-request';
import { TrackRequestIdPage } from '../pages/track-request-id/track-request-id';
import { TrackListPage } from '../pages/track-list/track-list';
import { TrackingStatusPage } from '../pages/tracking-status/tracking-status';
import { TrackingStatusListPage } from '../pages/tracking-status-list/tracking-status-list';
import { PersonalOrderPage } from '../pages/personal-orders/personal-orders';
import { CustomerOrder } from '../pages/customer-orders/customer-orders';
import { WithinWarrantyPeriodPage } from '../pages/within-warranty-period/within-warranty-period';


import { Http,HttpModule } from '@angular/http';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyProfilePage,
    MyPaymentsPage,
    MyDeliveriesPage,
    LoginPage,
    MyOrdersPage,
    HomePagePage,
    PreviousPurchasesPage,
    PendingOrdersPage,
    RecordDepositPage,
    OrderPage,
    DeliveryPage,
    CalculatePaymentPage,
    UploadDepositSlipPage,
    EditProfile,
    PersonalOrderPage,
    CustomerOrder,
    WarrantyHomePage,
    SubmitClaimNamePage,
    TrackClaimPage,
    PreviousClaimsPage,
    WarrantyOrderListPage,
    ClaimOrderPage,
    WarrantyDetailsPage,
    SubmitRequestPage,
    TrackRequestIdPage,
    TrackListPage,
    TrackingStatusPage,
    TrackingStatusListPage,
    WithinWarrantyPeriodPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyProfilePage,
    MyPaymentsPage,
    MyDeliveriesPage,
    LoginPage,
    MyOrdersPage,
    HomePagePage,
    PreviousPurchasesPage,
    PendingOrdersPage,
    RecordDepositPage,
    OrderPage,
    DeliveryPage,
    CalculatePaymentPage,
    UploadDepositSlipPage,
    EditProfile,
    WarrantyHomePage,
    SubmitClaimNamePage,
    TrackClaimPage,
    PreviousClaimsPage,
    WarrantyOrderListPage,
    ClaimOrderPage,
    CustomerOrder,
    PersonalOrderPage,
    WarrantyDetailsPage,
    SubmitRequestPage,
    TrackRequestIdPage,
    TrackListPage,
    TrackingStatusPage,
    TrackingStatusListPage,
    WithinWarrantyPeriodPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  ]
})
export class AppModule {}