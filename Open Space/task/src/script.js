const password = "TrustNo1";

document.getElementById("ok-button")
        .addEventListener("click", function () {
            if (document.getElementById("password").value == password) {
                document.querySelectorAll("input:disabled")
                    .forEach(input => input.disabled = false);;
            }
        });

