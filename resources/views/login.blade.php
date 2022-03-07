@extends('inc.layout')

@section('title', 'Login')

@section('content')
<div class="page-container login-container">
  <form class="login-box form">
    <h2>Login</h2>
    <div class="input-row">
      <input type="email" placeholder="Email">
      <div class="spacer"></div>
      <input type="password" placeholder="Password">
    </div>
    <input type="submit" value="Submit" class="submit">
  </form>
</div>
@endsection
