import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage'
import {createClient, REALTIME_LISTEN_TYPES} from '@supabase/supabase-js'
import {AppState} from "react-native";

const supabaseUrl = "http://127.0.0.1:54321";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});

supabase.channel('parent_inserts')
    .on(REALTIME_LISTEN_TYPES.POSTGRES_CHANGES,     {
        schema: 'public', // Subscribes to the "public" schema in Postgres
        table: '*',
        event: '*',       // Listen to all changes
    },
 (data) => {
        console.log(data);
    }).subscribe();

// supabase.channel('checkin_violations')
//     .on(REALTIME_LISTEN_TYPES.POSTGRES_CHANGES,     {
//             schema: 'public', // Subscribes to the "public" schema in Postgres
//             table: 'child_users',
//             event: 'insert',       // Listen to all changes
//         },
//         (data) => {
//             console.log(data);
//         }).subscribe();

export const storeUserMetadata = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('userData', jsonValue);
    } catch (e) {
    }
};

export const getChildMetadata = async () => {
    const jsonValue = await AsyncStorage.getItem('childData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const storeChildMetadata = async (value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem('childData', jsonValue);
    } catch (e) {
    }
};

export const getUserMetadata = async () => {
    const jsonValue = await AsyncStorage.getItem('userData');
    return jsonValue != null ? JSON.parse(jsonValue) : null;
};

export const fetchUserInfo = async () => {
    const { error } = await supabase.from('parent_users')
        .select()
        .then((res) => {
            storeUserMetadata(res.data[0]);
        })
}

export const fetchChildInfo = async (id) => {
    await supabase
        .from('child_users')
        .select()
        .eq('id', id)
        .then((res) => {
            storeChildMetadata(res.data[0]);
        })
}

export const getUserChildren = async () => {
    const { error } = await supabase.from('parent_users')
        .select()
        .then((res) => {
            storeUserMetadata(res.data[0]);
        })
}
export const supabaseAccountCreator = createClient(supabaseUrl, supabaseAnonKey);

AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});