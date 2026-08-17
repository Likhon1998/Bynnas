export const whatWeDo = [
    {
        id: 'build',
        title: 'custom software',
        icon: 'cube',
        pos: 'tl',
        kicker: '01 — craft',
        text: 'We design and build business software that matches how your team actually works.',
        lead: 'Software shaped around your counters, kitchens, stores, and fleets — not a template you have to live with.',
        face: 'pos',
        sections: [
            {
                title: 'Built around the work',
                text: 'Every Bynnas product starts as real logic: roles, receipts, stock rules, and the screens your staff will actually touch day after day.',
            },
            {
                title: 'Quiet by design',
                text: 'Fast screens, clear flows, and interfaces that disappear into the workday so your team focuses on customers — not the software.',
            },
        ],
        points: ['Domain-first design', 'Modular product code', 'Clean staff interfaces', 'Ready for scale'],
    },
    {
        id: 'integrate',
        title: 'system integration',
        icon: 'phone',
        pos: 'tr',
        kicker: '02 — connect',
        text: 'We connect POS, portals, pharmacy, restaurant, and fleet tools into one flow.',
        lead: 'Separate tools become one Bynnas stack — sales, service, stock, and movement in the same pulse.',
        face: 'core',
        sections: [
            {
                title: 'One stack',
                text: 'Webpos, Restora, Port, Pharma, and Bus Bynnas share data so a sale, a ticket, or a prescription never lives in a silo.',
            },
            {
                title: 'Staff-tested joins',
                text: 'We map the joins, test with your team, and leave you with one operational picture across every product.',
            },
        ],
        points: ['Shared product data', 'Live operational flow', 'Staff-tested joins', 'Zero-silo reporting'],
    },
    {
        id: 'deploy',
        title: 'cloud deployment',
        icon: 'headset',
        pos: 'bl',
        kicker: '03 — launch',
        text: 'We host, configure, and roll out stable cloud systems you can run every day.',
        lead: 'Go-live is a controlled event: environments, access, backups, and a platform that stays up when you need it.',
        face: 'ai',
        sections: [
            {
                title: 'Controlled go-live',
                text: 'Cloud hosting, user roles, and cutover are configured so opening hour on day one feels like a normal shift — not a fire drill.',
            },
            {
                title: 'Still running',
                text: 'Monitoring and rollback sit behind the scenes. You run the business. We keep the platform steady.',
            },
        ],
        points: ['Hardened cloud setup', 'Controlled cutover', 'Backups & monitoring', 'Quiet reliability'],
    },
    {
        id: 'support',
        title: 'support & training',
        icon: 'pano',
        pos: 'br',
        kicker: '04 — stay',
        text: 'We train your staff and stay with you after go-live — updates, fixes, and care.',
        lead: 'A Bynnas system is not left at the door. We train the floor and remain the partner on call.',
        face: 'ops',
        sections: [
            {
                title: 'Floor training',
                text: 'Cashiers, kitchen leads, pharmacists, and dispatchers learn the live screens — not a forgotten slide deck.',
            },
            {
                title: 'After go-live',
                text: 'Updates, fixes, and care continue after launch so the suite stays as sharp as day one.',
            },
        ],
        points: ['Floor-level training', 'Ongoing product care', 'Fast incident response', 'A partner after go-live'],
    },
];

export const products = [
    {
        id: 'restors',
        title: 'Bynnas Restora',
        featured: true,
        face: 'restora',
        icon: 'headset',
        kicker: '01 — hospitality',
        text: 'Hospitality, perfected — tables, kitchen, and guests moving as one.',
        lead: 'When the dining room is full and the pass is hot, Restora keeps every ticket, table, and guest in perfect time.',
        sections: [
            {
                title: 'Service that never slips',
                text: 'Tables, reservations, and waitlists stay aligned so hosts seat with confidence and guests never feel lost in the rush.',
            },
            {
                title: 'Kitchen in real time',
                text: 'Orders hit the pass the moment they leave the floor. Chefs see the next plate clearly — not a noisy, scrolling mess.',
            },
            {
                title: 'Built for peak hour',
                text: 'Quiet screens, gold-standard hospitality logic, and a system that holds when Friday night hits hardest.',
            },
        ],
        points: [
            'Table & floor control',
            'Live kitchen tickets',
            'Reservations & waitlist',
            'Guest flow tracking',
            'Order modifiers',
            'Split & merge bills',
            'Staff roles & shifts',
            'Sales & service reports',
        ],
    },
    {
        id: 'webpos',
        title: 'Bynnas Webpos',
        face: 'webpos',
        icon: 'cube',
        kicker: '02 — commerce',
        text: 'Cloud POS that bills fast, tracks stock, and closes the day clean.',
        lead: 'The counter your cashiers trust at peak hour — bills, stock, and reports in one quiet cloud stack.',
        sections: [
            {
                title: 'Speed at the counter',
                text: 'Tap, bill, receipt. Bynnas Webpos is built for queues that do not wait — clear screens and instant totals.',
            },
            {
                title: 'Stock that stays honest',
                text: 'Every sale updates inventory live. Know what is on the shelf before the customer asks for it.',
            },
            {
                title: 'Day-end without drama',
                text: 'Sales, returns, and cash-up reports land on the same data layer as the rest of the Bynnas suite.',
            },
        ],
        points: [
            'Fast cloud billing',
            'Live inventory',
            'Multi-payment modes',
            'Receipts & returns',
            'Barcode / SKU ready',
            'Cashier roles',
            'Daily sales reports',
            'Multi-counter sync',
        ],
    },
    {
        id: 'port',
        title: 'Bynnas Port',
        face: 'core',
        icon: 'phone',
        kicker: '03 — operations',
        text: 'One portal. Every team. The live picture of your business.',
        lead: 'Port is the command center — people, partners, and product signals in one secure operational view.',
        sections: [
            {
                title: 'One truth for everyone',
                text: 'Leadership, floor managers, and partners see the same live data — roles decide what they can change, not what they can know.',
            },
            {
                title: 'The join across products',
                text: 'Webpos, Restora, Pharma, and Bus Bynnas feed Port so operations never live in separate tabs and separate stories.',
            },
            {
                title: 'Access with intention',
                text: 'Fine-grained roles, partner views, and dashboards that surface what matters before it becomes a problem.',
            },
        ],
        points: [
            'Unified dashboard',
            'Role-based access',
            'Partner portals',
            'Live product signals',
            'Cross-suite reports',
            'Team directories',
            'Alert & activity feed',
            'Secure cloud login',
        ],
    },
    {
        id: 'pharma',
        title: 'Bynnas Pharma',
        face: 'ops',
        icon: 'pano',
        kicker: '04 — pharmacy',
        text: 'Pharmacy software that protects stock, expiry, and every dispense.',
        lead: 'From shelf to counter — inventory, expiry, prescriptions, and compliant dispensing held with clinical care.',
        sections: [
            {
                title: 'Stock you can trust',
                text: 'Batches, quantities, and expiry dates stay visible so nothing critical goes quiet until it is too late.',
            },
            {
                title: 'Dispense with confidence',
                text: 'Prescription flow, checks, and records keep the counter accurate when the queue is long and the work is precise.',
            },
            {
                title: 'Compliance without friction',
                text: 'Strict logs, quiet screens, and the same Bynnas reliability as the rest of the suite — built for regulated care.',
            },
        ],
        points: [
            'Inventory & batches',
            'Expiry alerts',
            'Prescription workflow',
            'Dispense records',
            'Supplier / purchase logs',
            'Controlled drug tracking',
            'Staff access levels',
            'Compliance reports',
        ],
    },
    {
        id: 'bus',
        title: 'Bus Bynnas',
        face: 'hands',
        icon: 'bus',
        kicker: '05 — fleet',
        text: 'Routes, tickets, and vehicles — fleet ops that stay on the clock.',
        lead: 'Dispatch that reads clean under pressure: schedules, ticketing, and vehicle movement in one fleet system.',
        sections: [
            {
                title: 'Dispatch that stays clear',
                text: 'Routes, departures, and assignments stay readable for operators who run on minutes, not meetings.',
            },
            {
                title: 'Tickets to movement',
                text: 'From booking to boarding, ticketing connects to the live picture of what is on the road.',
            },
            {
                title: 'Fleet in one language',
                text: 'Commerce and transport share one Bynnas operational language — so finance and dispatch are never strangers.',
            },
        ],
        points: [
            'Route planning',
            'Schedules & departures',
            'Ticketing & boarding',
            'Vehicle tracking',
            'Driver assignments',
            'Live fleet status',
            'Revenue reports',
            'Ops alerts',
        ],
    },
];

export const achievements = [
    { value: '05', label: 'products', mark: 'ai' },
    { value: '120', label: 'deployments', mark: 'pos' },
    { value: '98', label: 'uptime', mark: 'core' },
    { value: '24', label: 'support', mark: 'webpos' },
];
