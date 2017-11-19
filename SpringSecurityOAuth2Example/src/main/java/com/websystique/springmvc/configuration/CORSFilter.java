package com.websystique.springmvc.configuration;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.GenericFilterBean;

//@Order(1) // This should "overrule" Activiti's security
public class CORSFilter implements Filter  {

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException, ServletException {
		System.out.println("Filtering on...........................................................");
		HttpServletResponse response = (HttpServletResponse) res;
		 HttpServletRequest request = (HttpServletRequest) req;
		 
		 System.out.println("Host = " + request.getServerName());
		 System.out.println("Port = " + request.getServerPort());
		 System.out.println(request.getMethod());

        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Credentials", "true");
		response.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, OPTIONS, DELETE");
		response.setHeader("Access-Control-Max-Age", "3600");
        response.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Origin, Accept, Access-Control-Request-Method, Access-Control-Request-Headers");
 
        
	       if ("OPTIONS".equalsIgnoreCase(request.getMethod())) {	    	  
	             response.setStatus(HttpServletResponse.SC_OK);
	        } else {
	        	chain.doFilter(req, res);
	        }
	}

	public void init(FilterConfig filterConfig) throws ServletException {}

	public void destroy() {}

}