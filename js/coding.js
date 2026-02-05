 const items = document.querySelectorAll(".coding-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // 좌우 구분해서 등장
                if (entry.target.classList.contains("renewal")) {
                    entry.target.classList.add("show-right");
                } else {
                    entry.target.classList.add("show-left");
                }
            }
        });
    }, { threshold: 0.4 });

    items.forEach((item) => observer.observe(item));
        document.querySelectorAll(".reasons__list li").forEach((item) => {
            const card = item.querySelector(".card");
            if (!card) return;

            item.addEventListener("mouseenter", () => {
                card.style.opacity = "1";
                card.style.transform = "scale(1)";
            });

            item.addEventListener("mousemove", (e) => {
                const rect = item.getBoundingClientRect(); // li 위치 기준
                const x = e.clientX - rect.left + 5; // li 안에서 10px 띄우기
                const y = e.clientY - rect.top + 5;
                card.style.left = x + "px";
                card.style.top = y + "px";
            });

            item.addEventListener("mouseleave", () => {
                card.style.opacity = "0";
                card.style.transform = "scale(0.8)";
            });
        });
