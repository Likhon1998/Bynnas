import imgCustom from '../assets/images/blog/custom-software.jpg';
import imgIntegration from '../assets/images/blog/system-integration.jpg';
import imgCloud from '../assets/images/blog/cloud-deployment.jpg';
import imgAdoption from '../assets/images/blog/software-adoption.jpg';
import imgSecurity from '../assets/images/blog/app-security.jpg';

export const blogPosts = [
    {
        id: 'custom-vs-off-the-shelf',
        featured: true,
        category: 'Software Strategy',
        title: 'When custom software beats off-the-shelf tools',
        excerpt:
            'Buying a packaged product is faster on day one. Building custom wins when your workflows, roles, and reporting do not fit someone else’s template.',
        date: '2026-03-18',
        readTime: '7 min',
        accent: '#7c3aed',
        image: imgCustom,
        imageAlt: 'Developer writing code on a monitor',
        body: [
            'Most companies start with ready-made software. That is the right move when the problem is common: accounting, email, basic CRM. The cost of a wrong custom build is high, so defaulting to a product is often smart.',
            'Custom software becomes the better path when your process is the product. If cashiers, pharmacists, kitchen staff, or dispatchers follow rules that no generic tool models well, you end up forcing people to work around the system — or paying for endless configuration that still feels wrong.',
            'A practical test: list the five workflows that lose money when they fail. If three or more require special screens, roles, or integrations that vendors treat as “edge cases,” you are past the fit of a standard package.',
            'Good custom projects still borrow from products. You do not reinvent login, hosting, or payment rails. You invest where your operation is unique — floor control, batch tracking, route logic, partner portals — and keep everything else boring and proven.',
            'At Bynnas, we recommend custom when the software must match how the team already works under pressure. Off-the-shelf is fine for support functions. Core operations deserve a system built around real roles, real receipts, and real failure modes.',
        ],
    },
    {
        id: 'system-integration-truth',
        category: 'Integration',
        title: 'Why disconnected systems quietly tax your business',
        excerpt:
            'POS, inventory, pharmacy, and fleet tools that do not talk create duplicate entry, conflicting reports, and slow decisions. Integration is not a luxury — it is cost control.',
        date: '2026-03-05',
        readTime: '6 min',
        accent: '#06b6d4',
        image: imgIntegration,
        imageAlt: 'Server room network infrastructure',
        body: [
            'Every extra system that does not sync creates a hidden tax: someone retypes data, someone reconciles two spreadsheets, and someone argues about which number is “official.” That work rarely shows up as a line item, but it shows up every week.',
            'Integration means a shared data layer — sales, stock, tickets, and users move between tools without copy-paste. APIs, webhooks, and scheduled sync are the technical pieces. The business goal is simpler: one truth for operations and management.',
            'Start with the highest-pain handoff. For many teams that is “sale completed → stock updated → report available.” For others it is “order placed → kitchen notified → bill closed.” Fix the path that burns the most staff time first.',
            'Security and roles matter as much as connectivity. Connecting systems without access control creates a larger blast radius. Define who can see what before you open the pipes.',
            'Healthy integrations are monitored. If a sync fails at 2 a.m., you want an alert — not a surprise on Monday when inventory is wrong. Treat connection health like uptime: visible, owned, and tested.',
        ],
    },
    {
        id: 'cloud-deployment-checklist',
        category: 'Cloud & DevOps',
        title: 'A practical checklist before you move software to the cloud',
        excerpt:
            'Cloud is not “someone else’s computer” as a slogan — it is hosting, backups, access, monitoring, and a go-live plan. Miss one, and “migration” becomes downtime.',
        date: '2026-02-20',
        readTime: '8 min',
        accent: '#10b981',
        image: imgCloud,
        imageAlt: 'Earth from space representing cloud infrastructure',
        body: [
            'Moving to the cloud should reduce operational burden, not invent new ones. Before cutover, confirm where the application runs, how you deploy updates, and who gets paged when something fails.',
            'Backups are not a checkbox. Define recovery point and recovery time in plain language: how much data can you afford to lose, and how long can the floor stay offline? Test a restore at least once before you trust the plan.',
            'Identity comes next. Use clear user accounts, least-privilege roles, and a process to revoke access when staff leave. Shared passwords in a notebook are a business risk, not a temporary shortcut.',
            'Plan the go-live like an operations event. Who trains the floor? What is the fallback if day one is rough? How do you verify that yesterday’s data landed correctly? Soft launches and parallel runs cost less than a hard switch that fails at peak hour.',
            'After launch, monitoring closes the loop — uptime checks, error logs, and disk or database alerts. Cloud hosting without observability is just remote downtime. A tech partner should hand you a running system and a way to see that it is healthy.',
        ],
    },
    {
        id: 'software-adoption-staff',
        category: 'Delivery',
        title: 'Software fails when staff never adopt it — how to prevent that',
        excerpt:
            'The best architecture still fails if cashiers, pharmacists, or hosts refuse the new screens. Adoption is a delivery problem, not a training slide deck.',
        date: '2026-02-08',
        readTime: '6 min',
        accent: '#f59e0b',
        image: imgAdoption,
        imageAlt: 'Team collaborating around laptops in an office',
        body: [
            'Projects often track features shipped and ignore whether people use them. If the counter is slower after go-live, the release failed — even if every ticket in the backlog was closed.',
            'Adoption starts in discovery. Watch how staff work today. Design screens around their sequence, language, and stress points. Fancy UI that adds clicks during a queue will be abandoned for paper or WhatsApp within a week.',
            'Train on the live system with real scenarios: rush hour, returns, voided tickets, expired batches, missed departures. Generic demos create false confidence. Role-based sessions create muscle memory.',
            'Keep a short feedback loop after launch. A fixed channel for “this screen is wrong” — and a partner who fixes it fast — turns resistance into improvement. Silence after go-live is not success; it is often quiet workarounds.',
            'Measure adoption with simple signals: login frequency by role, time to complete a sale or dispense, support tickets per week. Those numbers tell you whether the software is helping or fighting the team.',
        ],
    },
    {
        id: 'secure-business-apps',
        category: 'Security',
        title: 'Security basics every business application should have',
        excerpt:
            'You do not need a Fortune-500 security team to protect operational software. You do need authentication, roles, logs, and a clear response when something looks wrong.',
        date: '2026-01-28',
        readTime: '7 min',
        accent: '#6366f1',
        image: imgSecurity,
        imageAlt: 'Laptop displaying a secure login interface',
        body: [
            'Operational software holds customer data, sales history, inventory, and sometimes regulated records. A breach or insider misuse is not only an IT issue — it is a trust and compliance issue.',
            'Start with strong identity: unique accounts, strong passwords or SSO where possible, and multi-factor authentication for admin and remote access. Shared “manager” logins erase accountability.',
            'Role-based access is the next layer. Cashiers should not see payroll. Junior staff should not delete audit logs. Pharmacists need different permissions than store clerks. Build roles from job reality, not from a default admin account for everyone.',
            'Keep logs you can actually use: who logged in, who changed stock, who voided a sale, who dispensed a controlled item. Logs without retention or review are decoration. Define how long you keep them and who checks anomalies.',
            'Finally, plan the ugly day. Who shuts down access? Who restores from backup? Who tells customers or regulators if required? A short incident playbook beats a long policy document that nobody opens under stress. Security is part of shipping software — not an add-on after launch.',
        ],
    },
    {
        id: 'apis-that-survive',
        category: 'Engineering',
        title: 'How to design APIs your other systems can trust',
        excerpt:
            'An API is a contract. If versioning, errors, and auth are vague, every integration becomes a fragile one-off.',
        date: '2026-01-14',
        readTime: '6 min',
        accent: '#0ea5e9',
        image: imgIntegration,
        imageAlt: 'Network and server infrastructure',
        body: [
            'Teams often “expose an endpoint” and call it an API. That works until a second consumer appears, a field changes meaning, or an error returns HTML instead of JSON.',
            'Treat the API as a product: stable paths, documented fields, predictable error codes, and authentication that matches how partners actually connect.',
            'Version early. Breaking changes should be intentional and announced — not discovered when a partner’s nightly sync fails.',
            'Idempotency and retries matter for operational systems. A double-submit on a sale or stock adjustment is expensive. Design for it before production traffic arrives.',
            'At Bynnas we prefer clear, boring APIs that accountants and ops tools can depend on for years — not clever ones that need a specialist to decode.',
        ],
    },
    {
        id: 'tech-debt-business',
        category: 'Software Strategy',
        title: 'Technical debt is a business decision — treat it like one',
        excerpt:
            'Skipping tests, hard-coding rules, and delaying refactors feel cheap until every new feature costs twice as much.',
        date: '2025-12-18',
        readTime: '5 min',
        accent: '#7c3aed',
        image: imgCustom,
        imageAlt: 'Code on a developer screen',
        body: [
            'Technical debt is not only an engineering complaint. It shows up as slower releases, more bugs in peak season, and higher quotes for “small” changes.',
            'Name the debt you accept. Shipping without a report export is fine if you schedule it. Shipping with shared admin passwords is not — that debt compounds into incidents.',
            'Budget a fixed slice of each release for cleanup: schema clarity, dead feature removal, and test coverage around money and inventory paths.',
            'Measure with lead time and defect rate, not feelings. If every sprint is firefighting, you are paying interest on debt whether you call it that or not.',
        ],
    },
    {
        id: 'choosing-software-partner',
        category: 'Partnership',
        title: 'How to choose a software partner you will not regret',
        excerpt:
            'Demos look the same. Ask about discovery, go-live, support, and who owns the code when the project ends.',
        date: '2025-12-02',
        readTime: '7 min',
        accent: '#ec4899',
        image: imgAdoption,
        imageAlt: 'Team collaborating in an office',
        body: [
            'A polished slide deck does not prove delivery. Ask how they learn your workflows, who trains your staff, and what happens in the first 30 days after launch.',
            'Clarify ownership. You should know where the source lives, how backups work, and how access is revoked when people leave — on both sides.',
            'References from similar operations beat generic case studies. A retail POS win does not automatically mean pharmacy or fleet competence.',
            'Price the whole relationship: build, hosting, support hours, and change requests. Cheap build with expensive silence after go-live is not cheap.',
            'The right partner talks about failure modes as openly as features. That honesty is a better signal than a longer feature list.',
        ],
    },
    {
        id: 'data-backup-reality',
        category: 'Cloud & DevOps',
        title: 'Backups that only exist on paper will fail you',
        excerpt:
            '“We have backups” is meaningless until you restore one under time pressure. Here is a simple standard for operational software.',
        date: '2025-11-20',
        readTime: '5 min',
        accent: '#10b981',
        image: imgCloud,
        imageAlt: 'Cloud and earth view from space',
        body: [
            'Backups fail quietly. Disk fills up, credentials expire, or the dump never ran. Without a restore test, you discover the problem on the worst day.',
            'Define RPO and RTO in business words: how many hours of sales can you lose, and how long can the counter stay offline?',
            'Store copies off the same machine. Encrypt them. Restrict who can delete them. Log every restore attempt.',
            'Schedule a restore drill quarterly — even a small database. Document the steps so the person on call is not inventing a plan at 2 a.m.',
        ],
    },
    {
        id: 'role-based-access',
        category: 'Security',
        title: 'Role-based access that matches how your floor works',
        excerpt:
            'Permissions copied from a template create either chaos or frustration. Build roles from real jobs, then lock them down.',
        date: '2025-11-05',
        readTime: '6 min',
        accent: '#6366f1',
        image: imgSecurity,
        imageAlt: 'Person securing access on laptop and phone',
        body: [
            'Default “everyone is admin” is still common in small systems. It is convenient until one account is shared, stolen, or used to void a week of sales.',
            'Map each role to tasks: host, cashier, pharmacist, dispatcher, manager, owner. Grant only what that task needs.',
            'Separate viewing from changing. Many people need reports; few should edit prices, stock counts, or user accounts.',
            'Review access when people change jobs. Offboarding should be a checklist item as routine as collecting a keycard.',
            'Good RBAC feels invisible to staff doing their job — and impossible for them to do someone else’s.',
        ],
    },
    {
        id: 'go-live-playbook',
        category: 'Delivery',
        title: 'A go-live playbook that keeps day one calm',
        excerpt:
            'Launch day is an operations event. Training, fallbacks, and a clear owner matter more than a ribbon-cutting demo.',
        date: '2025-10-22',
        readTime: '6 min',
        accent: '#f59e0b',
        image: imgAdoption,
        imageAlt: 'Team working through a software rollout',
        body: [
            'Treat go-live like opening a new counter, not like finishing a coding sprint. Someone owns the floor. Someone owns the system. Someone owns communication.',
            'Train with real scenarios before the switch. Parallel run when you can. Keep a paper or previous-system fallback for the first peak.',
            'Freeze non-critical changes for 48 hours. Day one is for stability and listening, not feature surprise.',
            'Schedule a same-day and next-day review: what broke, what confused staff, what to patch this week. Fast follow-up builds trust faster than a perfect first hour.',
        ],
    },
    {
        id: 'observability-basics',
        category: 'Engineering',
        title: 'Observability basics for business software that must stay up',
        excerpt:
            'If you only know the system is down when a customer calls, you do not have monitoring — you have hope.',
        date: '2025-10-08',
        readTime: '5 min',
        accent: '#06b6d4',
        image: imgIntegration,
        imageAlt: 'Server infrastructure lights',
        body: [
            'Uptime checks answer “is it reachable?” Logs answer “what failed?” Metrics answer “is it getting worse?” You need all three for operational tools.',
            'Alert on symptoms that matter: checkout errors, sync lag, disk full, certificate expiry — not on every noisy warning.',
            'Make alerts actionable. A ping that says “API 500” should include which service, since when, and a first step.',
            'Share a simple status view with operations leads. Transparency beats surprise when something wobbles during lunch rush.',
        ],
    },
];

export function getBlogPost(slug) {
    return blogPosts.find((p) => p.id === slug) || null;
}

export function formatBlogDate(iso) {
    try {
        return new Date(iso).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
        });
    } catch {
        return iso;
    }
}
