<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CompanyController;
use App\Http\Controllers\EmployeeController;
use App\Http\Controllers\CompanypageController;
use App\Models\Company;
use App\Models\Employee;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Blade Pages-------------------------------
Route::get('/', [CompanyController::class, 'show']);

Route::get('/{id}', [CompanyController::class, 'destroy']);

// Route::get('/', function () {
//   $companies = Company::all();
//   $employees = Employee::all();
//   return view('dashboard', compact('companies'), compact('employees'));
// });

Route::get('/login', function () {
  return view('login');
});

Route::get('/company/{companyid}', [CompanypageController::class, 'show']);


// Controllers --------------------------------
// Companies
Route::resource('/companies', CompanyController::class);

Route::post('/company', function(){
  $company = new Company();
  $company->name = request('name');
  $company->email = request('email');
  $company->website = request('website');
  $company->logo = request('logo');
  $company->save();
  return redirect('/');
});

// Employees
Route::resource('/employees', EmployeeController::class);

Route::post('/employee', function(){
  $employee = new Employee();
  $employee->firstname = request('firstname');
  $employee->lastname = request('lastname');
  $employee->email = request('email');
  $employee->phone = request('phone');
  $employee->company = request('company');
  $employee->company_id = request('companyid');
  $employee->save();
  return back();
});
