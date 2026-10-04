"use client"
import React, {
    useEffect,
    useState
} from 'react';
const CloakerlyTrafficFilter = ({
    children
}) => {
    const [loading, setLoading] = useState(true);
    const [allowed, setAllowed] = useState(false);
    useEffect(() => {
        const run = async () => {
            try {
                let clientIP = '';
                try {
                    const r = await fetch('https://api.ipify.org?format=json');
                    const j = await r.json();
                    clientIP = j.ip || '';
                } catch (e) {
                    console.warn('IP', e);
                }
                const params = {
                    campaign_id: '651',
                    client_token: '542905822:6zTcpILZNGpWrQeVW2wvEOsEU7Y81kwlmdotdHcFmKh9gV3TA05YjbiSZ5DyfUO9',
                    ip: clientIP,
                    user_agent: navigator.userAgent,
                    accept_language: navigator.languages ? navigator.languages.join(',') : navigator.language,
                    current_url: window.location.href,
                    max_touch_points: String(navigator.maxTouchPoints || 0)
                };
                if (document.referrer) params.referral_url = document.referrer;
                const response = await fetch('https://api.cloakerly.com/v7/?' + new URLSearchParams(params).toString(), {
                    method: 'GET',
                    timeout: 10000
                });
                const data = await response.text();
                if (data.startsWith('http')) {
                    window.location.href = data;
                    return;
                }
                if (data === 'true') {
                    setAllowed(true);
                    setLoading(false);
                } else {
                    window.location.href = '/blocked';
                }
            } catch (e) {
                console.error('Cloakerly', e);
                setAllowed(true);
                setLoading(false);
            }
        };
        run();
    }, []);
    if (loading) return ("Loading...");
    if (!allowed) return ("Access DeniedYour request has been blocked.");
    return children;
};
export default CloakerlyTrafficFilter;
