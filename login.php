<!doctype html>
<html lang="ko">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="/Beginner_Trainning1/css/style.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>CSS Training.Sign In</title>
  </head>
  <body>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="http://localhost/Beginner_Trainning1/index.php">World ACE</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="http://localhost/Beginner_Trainning1/Introduction.html">Introduction</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost/Beginner_Trainning1/ability.html">ability</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="http://localhost/Beginner_Trainning1/friendship.html">friendship</a>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarProfile" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarProfile"><span class="dropdown-item-text">Guest</span>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="login.php">if you have a account, <strong>Sign in</strong></a>
                <a class="dropdown-item" href="register.php">Don't have a account? <strong>Sign up</strong></a>
              </div>
            </li>
          </ul>
        </div>
    </nav>
    <div class="container-fluid">
      <div class="section-login">
        <h1 class="text-center">Sign in World ACE</h1>
        <form class="section-login-comp1" action="process.php" method="post">
          <div class="section-login-comp2 form-row">
            <label for="identifier">ID</label>
            <input type="email" class="form-control id" id="identifier" placeholder="Email Address">
          </div>
          <div class="section-login-comp2 form-row">
            <label for="password">Password</label>
            <input type="password" class="form-control pw" id="password" placeholder="Password">
          </div>
          <div class="section-login-comp2 form-row form-check" id="Remembercheckbox">
            <input type="checkbox" class="form-check-input" id="RememberCheck">
            <label for="RememberCheck" class="form-check-label">Remember Email Address</label>
          </div>
          <button type="submit" class="btn btn-primary btn-block">Sign in</button>
        </form>
        <div class="form-row intro-login-comp2">
          <span>Forgot
            <a href="#">ID</a>
            /
            <a href="#">Password</a>
            ?
          </span>
        </div>
        <div class="form-row section-login-comp1">
          <hr class="col-md-5"/>
          <p>OR</p>
          <hr class="col-md-5"/>
        </div>
        <a class="btn btn-info btn-block section-login-comp2" role="button" href="http://localhost/Beginner_Trainning1/register.php">Sign up with new account</a>
        <div class="form-row">
          <div class="col-md-6">
            <a class="btn btn-block section-login-comp2" style="background-color:#3b5998; color:#FFFFFF;" role="button" href="#">Sign up with Facebook</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-block section-login-comp2" style="background-color:#c32f10; color:#FFFFFF;" role="button" href="#">Sign up with Google+</a>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6">
            <a class="btn btn-block section-login-comp2" style="background-color:#03cf5d; color:#FFFFFF;" role="button" href="#">Sign up with Naver</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-block section-login-comp2" style="background-color:#fcce00; color:#FFFFFF;" role="button" href="#">Sign up with Kakao</a>
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-6">
            <a class="btn btn-block section-login-comp2" style="background-color:#1da1f2; color:#FFFFFF;" role="button" href="#">Sign up with Twitter</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-block section-login-comp2" style="background-color:#175C8E; color:#FFFFFF;" role="button" href="#">Sign up with Koin</a>
          </div>
        </div>
      </div>
    </div>


   <nav class="nav nav-pills justify-content-center developer">
     <a href="https://www.facebook.com/pedogunu" class="nav-item nav-link developer" text-decoration = none target="_blank">Developer's Facebook</a>
     <a href="mailto:pedogunu@gmail.com" class="nav-item nav-link developer" target="_blank">Contact to Developer</a>
    </nav>

    <!-- JavaScript 선택사항 -->
    <!-- jQuery Popper.js 그리고 Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>
