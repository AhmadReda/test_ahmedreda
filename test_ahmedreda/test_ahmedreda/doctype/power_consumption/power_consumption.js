// Copyright (c) 2023, Ahmed Reda and contributors
// For license information, please see license.txt

frappe.ui.form.on('Power Consumption', {
	refresh: function(frm) {
		frm.events.add_custom_buttons(frm)
		frm.toggle_display(['kw', 'kwh','monthly_average_tariff'], !frm.is_new());
	},
	excel_file(frm){
		frm.call('get_master_data').then(result=>{
			frm.set_value({
				'customer_name':result.message.customer_name,
				'phone':result.message.phone,
				'project':result.message.project,
			})
		})
	},
	add_custom_buttons(frm){
		if(!frm.is_new()){
			frm.add_custom_button('Get Calculations',()=>{
				frm.call('get_calculations').then(result =>{
					frm.remove_custom_button('Get Calculations')
					if(result.message){
						frappe.show_alert({
							message:__('Calculations Set Successfully'),
							indicator:'green'
						}, 5);
					}
				})
			}).addClass("btn-primary")
		}
	}
});
