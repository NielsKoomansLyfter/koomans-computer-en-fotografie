<head>
    <title>Koomans Computer & Fotografie</title>
    <?php
        include 'functions.php';
         
        foreach($files = GetItems('css','.css') as $file){ ?>
            <link rel="stylesheet" href="css/<?php echo $file; ?>">
        <?php }
        

        foreach($files = GetItems('js','.js') as $file) { ?>
            <script src="js/<?php echo $file; ?>" defer></script>
        <?php } 
    ?>
    <script src="https://kit.fontawesome.com/9efe11bfbd.js" crossorigin="anonymous"></script>
</head>