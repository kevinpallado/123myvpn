import { Container } from '@/components/container';
import IconAnonymous from '@/images/icon-anonymous.png';
import IconDevice from '@/images/icon-device.png';
import IconLog from '@/images/icon-log.png';
import IconProtection from '@/images/icon-protection.png';
import IconSecurity from '@/images/icon-security.png';
import IconWorldwide from '@/images/icon-worldwide.png';

const featureList = [
    {
        icon: IconProtection,
        title: 'Powerful Protection',
        description: 'Open-source code has fewer vulnerabilities and decreases the risk of data breaches.',
        overlay: 'linear-gradient(135deg, #febb97 0%, #f73e6e 100%)'
    },
    {
        icon: IconWorldwide,
        title: '24/7 customer support',
        description: ['Get customer support via live chat.'],
        overlay: 'linear-gradient(315deg, #2058ba 0%, #41d9f2 100%)'
    },
    {
        icon: IconDevice,
        title: 'Up to 6 Devices',
        description: 'Get simultaneous access to 6 devices with only one subscription',
        overlay: 'linear-gradient(135deg, #3fdbb1 0%, #26b6cb 100%)'
    },
    {
        icon: IconSecurity,
        title: 'Advanced Security',
        description: 'We won’t record IP addresses, accessed websites, Browsing histories, VPN server connections.',
        overlay: 'linear-gradient(135deg, #3fdbb1 0%, #26b6cb 100%)'
    },
    {
        icon: IconLog,
        title: 'No Log VPN',
        description: 'We don’t monitor or record any data about your internet traffic.',
        overlay: 'linear-gradient(135deg, #febb97 0%, #f73e6e 100%)'
    },
    {
        icon: IconAnonymous,
        title: 'Surf Anonymously',
        description: 'Pay with cryptocurrency and keep your privacy protected.',
        overlay: 'linear-gradient(315deg, #2058ba 0%, #41d9f2 100%)'
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 bg-[#f8faff]">
            <Container className="text-center">
                <div className="mb-28">
                    <h3 className="section-title">Features</h3>
                    <h2 className="section-description">Why 123my VPN?</h2>
                </div>

                <div className="grid grid-cols-3 gap-x-5 gap-y-8">
                    {featureList.map((item) => {
                        return (
                            <div
                                className="relative shadow-[0_4px_2px_0_rgba(0,0,0,0.06)] rounded-3xl"
                                style={{ backgroundImage: item.overlay }}
                                key={item.title}>
                                <div className="relative p-10">
                                    <div className="mb-11">
                                        <img src={item.icon} alt={item.title} className="mx-auto mb-6" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-9">{item.title}</h4>
                                    {Array.isArray(item.description) ? item.description.map((line: string, index: number) => (
                                        <p key={index} className="text-white">{line}</p>
                                    )) : <p className="text-white">{item.description}</p>}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
