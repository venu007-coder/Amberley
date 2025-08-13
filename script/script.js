document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.fade-in-up');

    const scrollTrigger = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight - 100;

            if (inView && !el.classList.contains('show')) {
                const delay = el.getAttribute('data-delay') || '0s';
                el.style.transitionDelay = delay;
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', scrollTrigger);
    scrollTrigger(); // trigger on load
});
document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".slide-in-left, .slide-in-right");

    const scrollTrigger = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight - 100;

            if (inView && !el.classList.contains("show")) {
                const delay = parseInt(el.dataset.delay) || 0; // default to 0 if not set
                setTimeout(() => {
                    el.classList.add("show");
                }, delay);
            }
        });
    };

    window.addEventListener("scroll", scrollTrigger);
    scrollTrigger(); // initial check
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.cube-slide');

    const scrollTrigger = () => {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            const inView = rect.top < window.innerHeight - 100;
            if (inView) {
                el.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', scrollTrigger);
    scrollTrigger(); // initial check
});


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let delayAttr = entry.target.getAttribute('data-delay') || '0';
        let delay = 0;

        // Convert '0.3s' → 300 ms
        if (delayAttr.includes('s')) {
          delay = parseFloat(delayAttr) * 1000;
        } else {
          delay = parseInt(delayAttr);
        }

        setTimeout(() => {
          entry.target.classList.add("in-view");
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  document.querySelectorAll(".reveal-on-scroll").forEach(section => {
    observer.observe(section);
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const target = document.querySelector('.simple-slices');
  if (!target) return;

  const io = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        obs.unobserve(entry.target); // animate once
      }
    });
  }, { threshold: 0.45 });

  io.observe(target);
});

