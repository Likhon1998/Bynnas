export const whatWeDo = [
    {
        id: 'build',
        title: 'Custom Software',
        icon: 'cube',
        pos: 'tl',
        kicker: 'Development',
        text: 'We write software for your specific business — not a template you have to fight with.',
        lead: 'Tell us how your team works and we\'ll build the system around that. POS counters, kitchens, pharmacies, fleets — we\'ve done it.',
        face: 'pos',
        sections: [
            {
                title: 'Your business, your rules',
                text: 'We start by learning your roles, your receipts, your stock logic. Then we build screens your staff will use without a manual.',
            },
            {
                title: 'Clean and fast',
                text: 'No bloat, no unnecessary features. The interface stays out of the way so people can focus on customers.',
            },
        ],
        points: ['Built to your specs', 'Modular codebase', 'Staff-friendly UI', 'Grows with you'],
    },
    {
        id: 'integrate',
        title: 'Integration',
        icon: 'phone',
        pos: 'tr',
        kicker: 'Connectivity',
        text: 'We connect your POS, portal, pharmacy, and fleet tools so they talk to each other.',
        lead: 'No more switching between five different systems. One login, one data layer, one picture of your business.',
        face: 'core',
        sections: [
            {
                title: 'Everything in one place',
                text: 'Sales from Webpos, orders from Restora, prescriptions from Pharma — all visible in Port without duplicate entry.',
            },
            {
                title: 'Tested with your team',
                text: 'We don\'t just plug things together and leave. Your staff test it, we fix what doesn\'t work, then it goes live.',
            },
        ],
        points: ['Shared data', 'Live sync', 'Staff-tested', 'One report source'],
    },
    {
        id: 'deploy',
        title: 'Deployment',
        icon: 'headset',
        pos: 'bl',
        kicker: 'Infrastructure',
        text: 'We host it, configure it, and make sure it\'s running when your doors open.',
        lead: 'Cloud hosting, user accounts, backups, monitoring — we handle the infrastructure so you don\'t have to.',
        face: 'ai',
        sections: [
            {
                title: 'Go-live done right',
                text: 'We plan the cutover, set up the environment, and make sure day one feels normal — not chaotic.',
            },
            {
                title: 'Stays up',
                text: 'Monitoring runs in the background. If something goes wrong, we know before you do.',
            },
        ],
        points: ['Cloud hosting', 'Planned rollout', 'Backups included', 'High uptime'],
    },
    {
        id: 'support',
        title: 'Training & Support',
        icon: 'pano',
        pos: 'br',
        kicker: 'After launch',
        text: 'We train your people on the live system and stay available for fixes and updates.',
        lead: 'Go-live is not goodbye. We train the staff, then stay on call for the long run.',
        face: 'ops',
        sections: [
            {
                title: 'Real training',
                text: 'Cashiers, pharmacists, dispatchers — everyone learns on the actual system they\'ll use tomorrow.',
            },
            {
                title: 'Ongoing care',
                text: 'Software updates, bug fixes, and a real person to call when you need help.',
            },
        ],
        points: ['Hands-on training', 'Regular updates', 'Fast response', 'Long-term partner'],
    },
];

export const products = [
    {
        id: 'restors',
        title: 'Bynnas Restora',
        featured: true,
        face: 'restora',
        icon: 'headset',
        kicker: 'Restaurants',
        text: 'Table management, kitchen tickets, and billing — built for busy restaurants.',
        lead: 'When service is full and the kitchen is slammed, Restora keeps orders flowing and tables turning.',
        sections: [
            {
                title: 'Front of house',
                text: 'Tables, reservations, and waitlists in one view. Hosts know what\'s available without shouting across the room.',
            },
            {
                title: 'Kitchen flow',
                text: 'Orders appear on the pass as they\'re placed. No handwriting, no lost tickets, no confusion.',
            },
            {
                title: 'Works under pressure',
                text: 'Friday night rush? The system holds. Simple screens, fast response, no crashes.',
            },
        ],
        points: [
            'Table & floor control',
            'Kitchen tickets',
            'Reservations',
            'Guest tracking',
            'Order modifiers',
            'Split billing',
            'Staff shifts',
            'Sales reports',
        ],
    },
    {
        id: 'webpos',
        title: 'Bynnas Webpos',
        face: 'webpos',
        icon: 'cube',
        kicker: 'Retail',
        text: 'Cloud POS for billing, stock, and daily reports. Fast at the counter.',
        lead: 'Your cashiers scan, bill, and move on. Stock updates automatically. End of day takes five minutes.',
        sections: [
            {
                title: 'Quick checkout',
                text: 'Scan, total, receipt. Designed for queues. No extra clicks, no lag.',
            },
            {
                title: 'Stock stays accurate',
                text: 'Every sale adjusts inventory. You know what\'s on the shelf without counting.',
            },
            {
                title: 'Clean close',
                text: 'Cash-up, returns, and sales reports — all ready when the day ends.',
            },
        ],
        points: [
            'Cloud billing',
            'Live inventory',
            'Multi-payment',
            'Receipts & returns',
            'Barcode ready',
            'Cashier roles',
            'Daily reports',
            'Multi-counter',
        ],
    },
    {
        id: 'port',
        title: 'Bynnas Port',
        face: 'core',
        icon: 'phone',
        kicker: 'Operations',
        text: 'One dashboard for your entire operation. See what\'s happening across all products.',
        lead: 'Port pulls data from Restora, Webpos, Pharma, and Bus into one screen. Everyone sees the same numbers.',
        sections: [
            {
                title: 'One view',
                text: 'Management and floor staff look at the same data. No conflicting spreadsheets.',
            },
            {
                title: 'Cross-product',
                text: 'Sales, tickets, prescriptions, fleet status — all feeding into one place.',
            },
            {
                title: 'Access control',
                text: 'Everyone sees what they need. Nobody sees what they shouldn\'t.',
            },
        ],
        points: [
            'Unified dashboard',
            'Role-based access',
            'Partner portals',
            'Live data',
            'Cross-product reports',
            'Team directory',
            'Activity feed',
            'Secure login',
        ],
    },
    {
        id: 'pharma',
        title: 'Bynnas Pharma',
        face: 'ops',
        icon: 'pano',
        kicker: 'Pharmacy',
        text: 'Inventory, dispensing, and compliance for pharmacy operations.',
        lead: 'Track batches, manage expiry, process prescriptions, and keep clean records for audits.',
        sections: [
            {
                title: 'Stock control',
                text: 'Batches, quantities, expiry dates — all visible. Nothing expires without warning.',
            },
            {
                title: 'Dispensing',
                text: 'Prescription workflow with checks and records. Accurate even when the queue is long.',
            },
            {
                title: 'Audit-ready',
                text: 'Logs, access levels, and reports that meet compliance requirements without extra work.',
            },
        ],
        points: [
            'Batch tracking',
            'Expiry alerts',
            'Prescriptions',
            'Dispense records',
            'Supplier logs',
            'Controlled drugs',
            'Staff access',
            'Compliance reports',
        ],
    },
    {
        id: 'bus',
        title: 'Bus Bynnas',
        face: 'hands',
        icon: 'bus',
        kicker: 'Transport',
        text: 'Routes, schedules, tickets, and fleet status in one system.',
        lead: 'Dispatch sees what\'s on the road. Tickets connect to vehicles. Finance sees revenue.',
        sections: [
            {
                title: 'Clear dispatch',
                text: 'Routes and departures laid out clearly. Drivers know where they\'re going.',
            },
            {
                title: 'Ticketing',
                text: 'Booking to boarding, connected to the live fleet picture.',
            },
            {
                title: 'Everything linked',
                text: 'Transport and commercial data in one system — dispatch and finance speak the same language.',
            },
        ],
        points: [
            'Route planning',
            'Schedules',
            'Ticketing',
            'Vehicle tracking',
            'Driver assignments',
            'Fleet status',
            'Revenue reports',
            'Alerts',
        ],
    },
];

export const achievements = [
    { value: '5', label: 'Products', mark: 'ai' },
    { value: '120+', label: 'Deployments', mark: 'pos' },
    { value: '98%', label: 'Uptime', mark: 'core' },
    { value: '24/7', label: 'Support', mark: 'webpos' },
];
