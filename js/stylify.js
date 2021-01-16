function t() {
    if (document.getElementById('myText').value == '') {
        return
    }
    figlet(document.getElementById('myText').value, 'Standard', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Standard").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3-D', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3-D").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '1Row', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#1Row").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3D Diagonal', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3D-Diagonal").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3D-ASCII', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3D-ASCII").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'ANSI Shadow', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#ANSI").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '3x5', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#3x5").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '4Max', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#4Max").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, '5 Line Oblique', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#5Line").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Acrobatic', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Acrobatic").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alligator', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alligator").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alligator2', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alligator2").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alpha', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alpha").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'Alphabet', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#Alphabet").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC 3 Line', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCLine").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC 3 Liv1', function(err, text) {
        if (err) {
            console.log('something went wrong...');
            console.dir(err);
            return;
        }
        $("#AMCLiv1").html(`<pre>${text}</pre>`)
    });
    figlet(document.getElementById('myText').value, 'AMC AAA01', function(err, text) {
            if (err) {
                console.log('something went wrong...');
                console.dir(err);
                return;
            }
            $("#AMCLAAA01").html(`<pre>${text}</pre>`)
        });
    figlet(document.getElementById('myText').value, 'AMC Neko', function(err, text) {
                if (err) {
                    console.log('something went wrong...');
                    console.dir(err);
                    return;
                }
                $("#AMCNeko").html(`<pre>${text}</pre>`)
            });



















    

}