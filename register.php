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
          </ul>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" id="navbarDropdownMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Profile
              </a>
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenu"><span class="dropdown-item-text">Guset</span>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="login.php">if you have a account, <strong>Login</strong></a>
                <a class="dropdown-item" href="register.php">Don't have a account? <strong>Register</strong></a>
              </div>
            </li>
          </ul>
        </div>
    </nav>
    <div class="container-fluid">
      <div class="section-register">
        <h1 class="text-center">Sign in World ACE</h1>
        <div class="row section-register-comp1">
          <div class="col-md-6">
            <a class="btn btn-block section-register-comp2" style="background-color:#3b5998; color:#FFFFFF;" role="button" href="#">Sign up with Facebook</a>
          </div>
          <div class="col-md-6">
            <a class="btn btn-block section-register-comp2" style="background-color:#c32f10; color:#FFFFFF;" role="button" href="#">Sign up with Google+</a>
          </div>
        </div>
        <div class="row section-register-comp1">
          <hr class="col-md-5"/>
          <p>OR</p>
          <hr class="col-md-5"/>
        </div>

        <form class="section-register-comp1" action="process.php" method="post">
          <div class="section-register-comp2 form-row">
            <div class="form-group col-md-12">
              <label for="identifier">ID</label>
              <input type="email" class="form-control id" id="identifier" placeholder="Email Address">
            </div>
          </div>

          <div class="section-register-comp2 form-row">
            <div class="form-group col-md-6">
              <label for="password">Password</label>
              <input type="password" class="form-control pw" id="password" placeholder="Password">
            </div>
            <div class="form-group col-md-6 section-register-comp2">
              <label for="confirmpassword">Confirm Password</label>
              <input type="password" class="form-control pw-check" id="password-check" placeholder="Repeat Password">
            </div>
          </div>
          <div class="section-register-comp2 form-row">
            <div class="form-group col-md-5">
              <label for="name-last">Last name</label>
              <input type="text" class="form-control" id="name-last" placeholder="Last name">
            </div>
            <div class="form-group col-md-5">
              <label for="name-first">First name</label>
              <input type="text" class="form-control" id="name-first" placeholder="First name">
            </div>
            <div class="form-group col-md-2">
              <label for="gender">Gender</label>
              <select class="form-control" id="gender">
                <option>male</option>
                <option>female</option>
              </select>
            </div>
          </div>
          <div class="row section-register-comp2">
            <hr class="col-md-5"/>
            <p>Optional</p>
            <hr class="col-md-5"/>
          </div>
          <div class="section-register-comp2 form-row">
            <div class="form-group col-md-5">
              <label for="phonenumber">Phone number</label>
              <div class="input-group">
                <div class="input-group-prepend">
                  <div class="input-group-text">+81</div>
                </div>
                <input type="text" class="form-control" id="phonenumber" placeholder="Your Phone number">
              </div>
            </div>
            <div class="form-group col-md-3">
              <label for="major-main">Main-Major</label>
              <select class="form-control" id="major-main">
                <option>컴퓨터공학부</option>
                <option>메카트로닉스학부</option>
                <option>기계공학부</option>
                <option>전기전자통신학부</option>
                <option>에너지신소재화학공학부</option>
                <option>산업경영공학부</option>
                <option>디자인건축공학부</option>
              </select>
            </div>

              <div class="form-group col-md-4">
                <label for="id-student">Student ID</label>
                <input type="text" class="form-control" id="student-id" placeholder="ex)2019136077">
              </div>
            </div>
          <div class="form-row justify-content-center section-register-comp2">
            <div class="col-md-3">
              <button type="submit" class="btn btn-block btn-primary signup">Sign in</button>
            </div>
            <div class="col-md-3">
              <a class="btn btn-block btn-secondary cancel" href="http://localhost/Beginner_Trainning1/index.php">Cancel</a>
            </div>
          </div>
        </form>
        <ul class="row intro-login-comp2">
          <span>Forgot
            <a href="?">ID</a>
            /
            <a href="#">Password</a>
            ?
          </span>
        </ul>

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
