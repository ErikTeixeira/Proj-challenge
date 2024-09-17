import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Footer = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
            <View style={styles.footer}>
                <Text style={styles.footerText}>
                    &#169; TechPeach Copyright 2024
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    footer: {
        backgroundColor: '#f5f5f5',
        padding: 15,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 14,
        color: '#666',
    },
});

export default Footer;
