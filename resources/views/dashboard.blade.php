@extends('inc.layout')

@section('title', 'Dashboard')

@section('content')
<div class="page-container dashboard-container">

  <form class="new-comp-section form" name="newcompsection" method="POST" action="/company" enctype="multipart/form-data">
    @csrf
    <div class="input-container company-input-container">
      <button type="button" name="closeform" id="comp-close" class="close">Cancel</button>
      <div class="input-row">
        <input type="text" name="name" placeholder="Company Name" id="comp-name">
        <div class="spacer"></div>
        <input type="email" name="email" placeholder="Company Email" id="comp-email">
      </div>
      <div class="input-row">
        <input type="text" name="website" placeholder="Website" id="comp-website">
        <div class="spacer"></div>
        <label for="comp-logo" class="file-input-label"><p>Upload Logo</p><i class="fa-solid fa-check"></i><i class="fa-solid fa-bars"></i></label>
        <input type="file" name="logo" value="Logo" id="comp-logo" class="file-input" accept="image/png, image/jpg, image/svg">
      </div>
    </div>
    <button type="submit" name="compsubmit" value="compsubmit" id="comp-submit" class="submit">Add Company</button>
    {{-- @if (session()->has('message'))
      <div class="completion-notification">
        {{ session()->get('message') }}
        <p>{{ session()->get('message') }}</p>
        <p>Company Added Successfully</p>
        <i class="fa-solid fa-xmark" id="close-notification"></i>
      </div>
    @endif --}}
    {{-- @if ($errors->any())
      <div class="completion-notification cn-error">
        <p>Error</p>
        <i class="fa-solid fa-xmark" id="close-notification"></i>
      </div>
    @else
      <div class="completion-notification">
        <p>Company Added Successfully</p>
        <i class="fa-solid fa-xmark" id="close-notification"></i>
      </div>
    @endif --}}
  </form>

  <section class="company-list-section">
    <div class="company-list-titles">
      <h2>Companies</h2>
      <div class="small"><i class="fa-solid fa-user-group"></i></div>
      {{-- <div class="small"><i class="fa-solid fa-trash-can"></i></div> --}}
      <div class="small"><i class="fa-solid fa-gear"></i></div>
    </div>
    @foreach($companies as $Company)
    <div class="company-list-item">
      <div class="list-company large"><p>{{ $Company->name }}</p><div></div></div>
      {{-- <div class="list-employees small"><p>{{ Employee::where(['company_id' => $Company->id])->count() }}</p></div> --}}
      <div class="list-employees small"><p>{{ $employees->where('company_id', '=', $Company->id)->count() }}</p></div>
      {{-- <a href="/{{ $Company->id }}" class="remove-comp-button small"><i class="fa-solid fa-xmark"></i></a> --}}
      <a class="small button-hover" href="company/{{ $Company->id }}"><i class="fa-solid fa-arrow-right"></i></a>
    </div>
    @endforeach
  </section>

</div>
@endsection
