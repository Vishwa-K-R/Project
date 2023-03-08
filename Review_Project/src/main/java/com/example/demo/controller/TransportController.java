package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Transport;
import com.example.demo.service.TransportService;

@RestController
@CrossOrigin
public class TransportController {
	@Autowired
	TransportService service;

	@CrossOrigin
	@PostMapping("/tra")
	public String add(@RequestBody Transport transport)
	{
		return service.addTransport(transport);
	}

	@CrossOrigin
	@GetMapping("/tra")
	public List<Transport> get()
	{
		return service.getTransport();
	}
	
	@CrossOrigin
	@PutMapping("/tra")
	public String update(@RequestBody Transport transport)
	{
		return service.upadteTransport(transport);
	}

	@CrossOrigin
	@DeleteMapping("/tra")
		public String delete(@RequestParam int id)
		{
		return service.deleteTransportById(id);
		}
	@GetMapping("/tra/{field}")
	public List<Transport> transportWithSort(@PathVariable String field)
	{
		return service.getTransportSorted(field);
	}
	@GetMapping("/tra/{offset}/{pageSize}")
	public List<Transport> transportWithPagination(@PathVariable int offset,@PathVariable int pageSize)
	{
		return service.getTransportWithPagination(offset, pageSize );
	}
	

}
