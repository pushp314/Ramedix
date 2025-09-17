import React, { useState } from 'react';
import { Bell, Plus, Clock, Pill, Calendar, Trash2, Edit } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Reminder {
  id: string;
  medicationName: string;
  dosage: string;
  times: string[];
  frequency: string;
  startDate: string;
  endDate?: string;
  notes?: string;
  enabled: boolean;
}

const MedicationReminders = () => {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: '1',
      medicationName: 'Cardiomax Pro',
      dosage: '20mg',
      times: ['08:00', '20:00'],
      frequency: 'Twice daily',
      startDate: '2024-12-01',
      endDate: '2024-12-31',
      notes: 'भोजन के साथ लें (Take with food)',
      enabled: true
    },
    {
      id: '2',
      medicationName: 'GlucoBalance',
      dosage: '1000mg',
      times: ['07:00', '19:00'],
      frequency: 'Twice daily',
      startDate: '2024-12-01',
      notes: 'Take 30 minutes before meals',
      enabled: true
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newReminder, setNewReminder] = useState<Partial<Reminder>>({
    medicationName: '',
    dosage: '',
    times: [''],
    frequency: 'once-daily',
    startDate: '',
    notes: '',
    enabled: true
  });

  const toggleReminder = (id: string) => {
    setReminders(reminders.map(reminder =>
      reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder
    ));
  };

  const deleteReminder = (id: string) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
  };

  const addReminder = () => {
    if (newReminder.medicationName && newReminder.dosage && newReminder.startDate) {
      const reminder: Reminder = {
        id: Date.now().toString(),
        medicationName: newReminder.medicationName!,
        dosage: newReminder.dosage!,
        times: newReminder.times!.filter(time => time !== ''),
        frequency: getFrequencyText(newReminder.frequency!),
        startDate: newReminder.startDate!,
        endDate: newReminder.endDate,
        notes: newReminder.notes,
        enabled: true
      };
      
      setReminders([...reminders, reminder]);
      setNewReminder({
        medicationName: '',
        dosage: '',
        times: [''],
        frequency: 'once-daily',
        startDate: '',
        notes: '',
        enabled: true
      });
      setShowAddForm(false);
    }
  };

  const getFrequencyText = (frequency: string) => {
    switch (frequency) {
      case 'once-daily': return 'Once daily';
      case 'twice-daily': return 'Twice daily';
      case 'three-times': return 'Three times daily';
      case 'four-times': return 'Four times daily';
      case 'as-needed': return 'As needed';
      default: return 'Once daily';
    }
  };

  const addTimeSlot = () => {
    setNewReminder({
      ...newReminder,
      times: [...(newReminder.times || []), '']
    });
  };

  const updateTimeSlot = (index: number, time: string) => {
    const updatedTimes = [...(newReminder.times || [])];
    updatedTimes[index] = time;
    setNewReminder({
      ...newReminder,
      times: updatedTimes
    });
  };

  const removeTimeSlot = (index: number) => {
    const updatedTimes = (newReminder.times || []).filter((_, i) => i !== index);
    setNewReminder({
      ...newReminder,
      times: updatedTimes
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Medication Reminders</h2>
            <p className="text-gray-600">Never miss a dose with personalized medication reminders</p>
          </div>
          <button
            onClick={() => setShowAddForm(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center"
          >
            <Plus size={20} className="mr-2" />
            Add Reminder
          </button>
        </div>

        {/* Reminders list */}
        <div className="space-y-4 mb-8">
          <AnimatePresence>
            {reminders.map((reminder) => (
              <motion.div
                key={reminder.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -100 }}
                className={`border rounded-xl p-6 transition-all duration-200 ${
                  reminder.enabled ? 'border-gray-200 bg-white' : 'border-gray-100 bg-gray-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <Pill className={`mr-3 ${reminder.enabled ? 'text-blue-600' : 'text-gray-400'}`} size={20} />
                      <h4 className={`text-lg font-semibold ${reminder.enabled ? 'text-gray-900' : 'text-gray-500'}`}>
                        {reminder.medicationName}
                      </h4>
                      <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                        reminder.enabled ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {reminder.enabled ? 'Active' : 'Paused'}
                      </span>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-medium text-gray-700">Dosage:</span>
                        <span className="text-gray-600 ml-2">{reminder.dosage}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Frequency:</span>
                        <span className="text-gray-600 ml-2">{reminder.frequency}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Times:</span>
                        <span className="text-gray-600 ml-2">{reminder.times.join(', ')}</span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">Duration:</span>
                        <span className="text-gray-600 ml-2">
                          {reminder.startDate} {reminder.endDate && `- ${reminder.endDate}`}
                        </span>
                      </div>
                    </div>
                    
                    {reminder.notes && (
                      <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                        <span className="text-sm text-blue-800">{reminder.notes}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => toggleReminder(reminder.id)}
                      className={`p-2 rounded-lg transition-colors ${
                        reminder.enabled
                          ? 'text-gray-600 hover:bg-gray-100'
                          : 'text-green-600 hover:bg-green-100'
                      }`}
                    >
                      <Bell size={16} />
                    </button>
                    <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                      <Edit size={16} />
                    </button>
                    <button
                      onClick={() => deleteReminder(reminder.id)}
                      className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {reminders.length === 0 && (
          <div className="text-center py-12">
            <Bell size={48} className="mx-auto mb-4 text-gray-300" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No Reminders Set</h3>
            <p className="text-gray-600 mb-6">Add your first medication reminder to get started</p>
            <button
              onClick={() => setShowAddForm(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Add Your First Reminder
            </button>
          </div>
        )}

        {/* Add reminder form */}
        <AnimatePresence>
          {showAddForm && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="border-t pt-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Add New Reminder</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medication Name
                  </label>
                  <input
                    type="text"
                    value={newReminder.medicationName || ''}
                    onChange={(e) => setNewReminder({ ...newReminder, medicationName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter medication name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dosage
                  </label>
                  <input
                    type="text"
                    value={newReminder.dosage || ''}
                    onChange={(e) => setNewReminder({ ...newReminder, dosage: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="e.g., 20mg, 1 tablet"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frequency
                  </label>
                  <select
                    value={newReminder.frequency || 'once-daily'}
                    onChange={(e) => setNewReminder({ ...newReminder, frequency: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="once-daily">Once daily</option>
                    <option value="twice-daily">Twice daily</option>
                    <option value="three-times">Three times daily</option>
                    <option value="four-times">Four times daily</option>
                    <option value="as-needed">As needed</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Start Date
                  </label>
                  <input
                    type="date"
                    value={newReminder.startDate || ''}
                    onChange={(e) => setNewReminder({ ...newReminder, startDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Time slots */}
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Reminder Times
                </label>
                <div className="space-y-2">
                  {(newReminder.times || ['']).map((time, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Clock size={16} className="text-gray-400" />
                      <input
                        type="time"
                        value={time}
                        onChange={(e) => updateTimeSlot(index, e.target.value)}
                        className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                      {(newReminder.times || []).length > 1 && (
                        <button
                          onClick={() => removeTimeSlot(index)}
                          className="text-red-600 hover:text-red-800 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    onClick={addTimeSlot}
                    className="text-blue-600 hover:text-blue-800 text-sm flex items-center transition-colors"
                  >
                    <Plus size={16} className="mr-1" />
                    Add another time
                  </button>
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Notes (Optional)
                </label>
                <textarea
                  value={newReminder.notes || ''}
                  onChange={(e) => setNewReminder({ ...newReminder, notes: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Special instructions, take with food, etc."
                />
              </div>

              <div className="flex space-x-4 mt-6">
                <button
                  onClick={() => setShowAddForm(false)}
                  className="flex-1 border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={addReminder}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Add Reminder
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Today's reminders */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Calendar className="mr-2 text-blue-600" size={20} />
            Today's Reminders
          </h3>
          <div className="space-y-3">
            {reminders
              .filter(r => r.enabled)
              .flatMap(reminder => 
                reminder.times.map(time => ({
                  ...reminder,
                  time,
                  isPast: new Date(`2024-12-15T${time}:00`) < new Date()
                }))
              )
              .sort((a, b) => a.time.localeCompare(b.time))
              .map((item, index) => (
                <div
                  key={`${item.id}-${item.time}`}
                  className={`flex items-center justify-between p-4 rounded-lg ${
                    item.isPast ? 'bg-gray-100' : 'bg-white border border-blue-200'
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      item.isPast ? 'bg-gray-400' : 'bg-blue-500'
                    }`}></div>
                    <div>
                      <div className={`font-medium ${item.isPast ? 'text-gray-500' : 'text-gray-900'}`}>
                        {item.medicationName} - {item.dosage}
                      </div>
                      <div className={`text-sm ${item.isPast ? 'text-gray-400' : 'text-gray-600'}`}>
                        {item.time} {item.notes && `• ${item.notes}`}
                      </div>
                    </div>
                  </div>
                  {!item.isPast && (
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                      Mark Taken
                    </button>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicationReminders;