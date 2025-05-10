package com.quickcomm.security;

import java.util.Date;

import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;


@Component
public class JwtUtil {
	 @Value("${jwt.secret}")
	    private String secretKey;

	    @Value("${jwt.expiration}")
	    private long expiration;

	    public String generateToken(String mobileNumber) {
	        Date now = new Date();
	        Date expiryDate = new Date(now.getTime() + expiration);

	        return Jwts.builder()
	                   .setSubject(mobileNumber)
	                   .setIssuedAt(now)
	                   .setExpiration(expiryDate)
	                   .signWith(Keys.hmacShaKeyFor(secretKey.getBytes()), SignatureAlgorithm.HS256)
	                   .compact();
	    }

	    // Extract mobile number from token
	    public String extractMobileNumber(String token) {
	        return getClaims(token).getSubject();
	    }

	    // Validate token
	    public boolean validateToken(String token, String mobileNumber) {
	        String extractedMobile = extractMobileNumber(token);
	        return extractedMobile.equals(mobileNumber) && !isTokenExpired(token);
	    }

	    // Check if token is expired
	    public boolean isTokenExpired(String token) {
	        return getClaims(token).getExpiration().before(new Date());
	    }

	    private Claims getClaims(String token) {
	        return Jwts.parserBuilder()
	                .setSigningKey(Keys.hmacShaKeyFor(secretKey.getBytes()))
	                .build()
	                .parseClaimsJws(token)
	                .getBody();
	    }

}
