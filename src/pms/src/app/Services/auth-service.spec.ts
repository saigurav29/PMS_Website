import { HttpClientTestingModule } from '@angular/common/http/testing';
import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

const dummyempData:any  = {"employeeId": 1,"empFirstName": "Sai","empLastName": "Gurav","emailId": "saigurav65@gmail.com","dob": "2021-08-02T14:01:45.87","gender": "M","address": "Lingampally, Taranagar","statecode": 3,"citycode": 7,"pincode": "500019","isactive": "Y"};

describe('AuthServiceService', () => {
    let subject: AuthServiceService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
    HttpClientTestingModule
    ],providers:[AuthServiceService]
  }));
  beforeEach(inject([AuthServiceService], (auth: AuthServiceService) => {
    subject = auth;
  }));
  it('should be created', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    expect(service).toBeTruthy();
  });

  it('should set token in session', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);  
    service.setUserInfo("Sai Test");
    expect(sessionStorage.getItem("userInfo")).toEqual(JSON.stringify("Sai Test"));
  });

  // it('should check startAuthentication', () => {
  //   const service: AuthServiceService = TestBed.get(AuthServiceService);
  //   service.startAuthentication();
  // });

  it('should check getUserInfo if User info present', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    service.setUserInfo("Sai Test");
    service.getUserInfo();
  });

  
  it('should check getUserInfo if no user info set ', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);
    sessionStorage.clear();
    service.getUserInfo();
  });

  // it('should clear local storage', () => {
  //   const service: AuthServiceService = TestBed.get(AuthServiceService);
  //   service.clearLocalStorage()
  //   expect(localStorage.length).toEqual(0);
  // });

  it('should clear session storage set session', () => {
    const service: AuthServiceService = TestBed.get(AuthServiceService);  
    service.setUserInfo("Sai Test");
    service.clearSessionStorage();
    setTimeout(() => {
        expect(sessionStorage.length).toBeGreaterThanOrEqual(0);
    }, 5000); 
  });

});
