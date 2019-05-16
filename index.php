<!doctype html>
<html lang="ko">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="/Beginner_Trainning1/css/style.css">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    <title>CSS Training.Sign In & Register</title>
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
              <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarProfile">
                <?php
                  if(1){
                    echo '
                      <span class="dropdown-item-text">Guest</span>
                    ';
                  } else {
                    echo '<a class="dropdown-item-text" href="#">계정</a>';
                  }
                 ?>
                <div class="dropdown-divider"></div>
                <?php
                  if(1){
                    echo '
                      <a class="dropdown-item" href="login.php">if you have a account, <strong>Sign in</strong></a>
                      <a class="dropdown-item" href="register.php">Don\'t have a account? <strong>Sign up</strong></a>
                    ';
                  } else {
                    echo '
                      <a class="dropdown-item" href="#"><strong>Logout</strong></a>
                    ';
                  }

                 ?>

              </div>
            </li>
          </ul>
        </div>
    </nav>

    <div class="container-fluid intro">
      <div class="bd">
        <div id="indexcarousel1" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#indexcarousel1" data-slide-to="0" class="active"></li>
            <li data-target="#indexcarousel1" data-slide-to="1"></li>
            <li data-target="#indexcarousel1" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active indexcarousel">
              <img src="http://localhost/Beginner_Trainning1/img/Wonbeen.png" class="d-block w-100" alt=".">
              <div class="carousel-caption d-none d-md-block">
                <h2>Who is Choi Won-been?</h2>
                <p>The World ACE, Choi Won-been</p>
              </div>
            </div>
            <div class="carousel-item indexcarousel">
              <img src="http://localhost/Beginner_Trainning1/img/ability.jpg" class="d-block w-100" alt="His ability">
              <div class="carousel-caption d-none d-md-block">
                <h2>How's his skills?</h2>
                <p>World Amazed at his skills.</p>
              </div>
            </div>
            <div class="carousel-item indexcarousel">
              <img src="http://localhost/Beginner_Trainning1/img/friendship.jpg" class="d-block w-100" alt="His friendship">
              <div class="carousel-caption d-none d-md-block">
                <h2>How's his friendship?</h2>
                <p>Worlds know Choi Won-been.</p>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#indexcarousel1" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#indexcarousel1" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
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
