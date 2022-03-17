@extends('inc.layout')

@section('title', 'Company')

@section('content')
<div class="page-container company-container">

  @foreach ($companies as $Company)
  <section class="company-info-section">
    <img src="#" alt="Company Logo" class="company-logo">
    <div class="company-info">
      <h1>{{ $Company->name }}</h1>
      <h3><a href="{{ $Company->website }}"><i class="fa-solid fa-link"></i>{{ $Company->website }}</a></h3>
      <h3><i class="fa-solid fa-envelope"></i>{{ $Company->email }}</h3>
      <h3><i class="fa-solid fa-user-group"></i>{{ $employees->count() }}</h3>
    </div>
  </section>
  @endforeach

  <form class="new-employee-section form" name="newemployeesection" method="POST" action="/employee" enctype="multipart/form-data">
    @csrf
    <div class="input-container employee-input-container">
      <button type="button" name="closeform" id="employee-close" class="close">Cancel</button>
      <div class="input-row">
        <input type="text" name="firstname" placeholder="First Name" id="employee-firstname">
        <div class="spacer"></div>
        <input type="text" name="lastname" placeholder="Last Name" id="employee-lastname">
      </div>
      <div class="input-row">
        <input type="email" name="email" placeholder="Email" id="employee-email">
        <div class="spacer"></div>
        <input type="text" name="phone" placeholder="Phone" id="employee-phone">
      </div>
      <input type="text" name="company" value="{{ $Company->name }}" placeholder="Company" id="employee-company">
      <input type="text" name="companyid" value="{{ $Company->id }}" id="company-id">
    </div>
    <button type="submit" name="compsubmit" value="compsubmit" id="employee-submit" class="submit">Add Employee</button>
    {{-- @if (isset($employees))
      <div class="completion-notification">
        <p>Employee Added Successfully</p>
        <i class="fa-solid fa-xmark" id="close-notification"></i>
      </div>
    @endif --}}
  </form>

  <section class="employee-list-section">
    <div>
      <h2>Employees</h2>
      <div class="employee-titles">
        <h4>First Name</h4>
        <h4>Last Name</h4>
        <h4>Email</h4>
        <h4>Phone</h4>
      </div>

      @foreach($employees as $Employee)
      <div class="employee-list-item">
        <p class="no-border-left">{{ $Employee->firstname }}</p>
        <p>{{ $Employee->lastname }}</p>
        <p>{{ $Employee->email }}</p>
        <p>{{ $Employee->phone }}</p>
      </div>
      @endforeach
    </div>
  </section>

</div>
@endsection
