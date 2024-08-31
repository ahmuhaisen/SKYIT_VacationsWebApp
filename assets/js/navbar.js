export function generateNavbar() {
    const header = document.createElement('header');

    const nav = document.createElement('nav');
    nav.className = 'navbar navbar-expand-lg bg-success';

    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    const toggleButton = document.createElement('button');
    toggleButton.className = 'navbar-toggler';
    toggleButton.type = 'button';
    toggleButton.setAttribute('data-bs-toggle', 'collapse');
    toggleButton.setAttribute('data-bs-target', '#navbarNav');
    toggleButton.setAttribute('aria-controls', 'navbarNav');
    toggleButton.setAttribute('aria-expanded', 'false');
    toggleButton.setAttribute('aria-label', 'Toggle navigation');

    const togglerIcon = document.createElement('span');
    togglerIcon.className = 'navbar-toggler-icon';
    toggleButton.appendChild(togglerIcon);

    const collapseDiv = document.createElement('div');
    collapseDiv.className = 'collapse navbar-collapse';
    collapseDiv.id = 'navbarNav';

    const navbarContentDiv = document.createElement('div');
    navbarContentDiv.className = 'w-100 d-flex justify-content-between';

    const leftUl = document.createElement('ul');
    leftUl.className = 'navbar-nav';

    const leftNavItems = [
        { text: 'Home', href: 'home.html', active: true },
        { text: 'Profiles', href: 'profile.html', active: false },
        { text: 'Reports', href: '#', active: false },
        { text: 'Settings', href: '#', active: false }
    ];

    leftNavItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        if (item.active) a.classList.add('active');
        a.setAttribute('aria-current', 'page');
        a.href = item.href;
        a.textContent = item.text;

        li.appendChild(a);
        leftUl.appendChild(li);
    });

    const rightUl = document.createElement('ul');
    rightUl.className = 'navbar-nav';

    const rightNavItems = [
        { iconClass: 'bi bi-bell-fill', href: '#' },
        { iconClass: 'bi bi-person-circle', href: '#' }
    ];

    rightNavItems.forEach(item => {
        const li = document.createElement('li');
        li.className = 'nav-item';

        const a = document.createElement('a');
        a.className = 'nav-link';
        a.href = item.href;

        const icon = document.createElement('i');
        icon.className = item.iconClass;

        a.appendChild(icon);
        li.appendChild(a);
        rightUl.appendChild(li);
    });

    navbarContentDiv.appendChild(leftUl);
    navbarContentDiv.appendChild(rightUl);
    collapseDiv.appendChild(navbarContentDiv);
    containerDiv.appendChild(toggleButton);
    containerDiv.appendChild(collapseDiv);
    nav.appendChild(containerDiv);

    header.appendChild(nav);

    document.body.appendChild(header);
}